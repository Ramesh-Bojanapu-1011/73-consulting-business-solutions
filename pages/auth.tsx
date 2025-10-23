import React from "react";
import Head from "next/head";
import Image from "next/image";

type Mode = "user" | "admin";
type UserView = "login" | "register" | "forgot";

const setAllUsers = (users: any[]) =>
  localStorage.setItem("All_Users", JSON.stringify(users));
const getAllUsers = () => JSON.parse(localStorage.getItem("All_Users") || "[]");
const setCurrentUser = (user: any) =>
  localStorage.setItem("Current_User", JSON.stringify(user));

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASSWORD = "admin123";

const AuthPage: React.FC = () => {
  const [mode, setMode] = React.useState<Mode>("user");
  const [view, setView] = React.useState<UserView>("login");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  // simple form states
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [adminEmail, setAdminEmail] = React.useState("");

  const submitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      setMessage(view === "register" ? "Registered" : "Logged in");
      if (view === "register") {
        const users = getAllUsers();
        const now = new Date().toISOString();
        const newUser = {
          firstname,
          lastname,
          email,
          password,
          registerTime: now,
          loginTime: null,
          role: "user",
        };
        users.push(newUser);
        setAllUsers(users);

        setView("login");
        setEmail(email);
        setPassword(password);
      }
      if (view === "login") {
        const users = getAllUsers();
        const user = users.find(
          (u: any) => u.email === email && u.password === password
        );
        if (!user) {
          setMessage("Invalid credentials.");
          return;
        }
        window.location.href = "/home1";
        user.loginTime = new Date().toISOString();
        setCurrentUser(user);
        setMessage("Login successful!");

        setAllUsers(users.map((u: any) => (u.email === user.email ? user : u)));
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  const submitForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/auth/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(
        data.message || "If your email exists you will receive a link"
      );
    } catch (err) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  const submitAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (adminEmail == ADMIN_EMAIL && password == ADMIN_PASSWORD) {
        window.location.href = "/admin-dashboard";
        setCurrentUser({
          email: ADMIN_EMAIL,
          role: "admin",
          loginTime: new Date().toISOString(),
        });

        setMessage("Admin login successful!");
      } else {
        setMessage("Invalid admin credentials.");
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center py-12 px-4">
      <Head>
        <title>Auth — Enkonix</title>
      </Head>

      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <div className="p-6">
          <Image
            src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
            alt="Site Logo"
            width={120}
            height={120}
            className="rounded-md mx-auto"
          />
        </div>
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Sign in / Register</h3>
            <div className="text-sm text-gray-500">
              Choose User or Admin flow
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1 rounded ${
                mode === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => setMode("user")}
            >
              User
            </button>
            <button
              className={`px-3 py-1 rounded ${
                mode === "admin"
                  ? "bg-indigo-600 text-white"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => setMode("admin")}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="p-6">
          {mode === "user" ? (
            <div>
              <div className="flex gap-2 mb-4">
                <button
                  className={`px-3 py-1 rounded ${
                    view === "login"
                      ? "bg-indigo-600 text-white"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => setView("login")}
                >
                  Login
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    view === "register"
                      ? "bg-indigo-600 text-white"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => setView("register")}
                >
                  Register
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    view === "forgot"
                      ? "bg-indigo-600 text-white"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => setView("forgot")}
                >
                  Forgot
                </button>
              </div>

              {message && (
                <div className="p-3 mb-3 text-sm bg-gray-100 dark:bg-gray-900 rounded">
                  {message}
                </div>
              )}

              {view === "forgot" ? (
                <form onSubmit={submitForgot} className="space-y-3">
                  <input
                    className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 bg-indigo-600 text-white rounded"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send reset"}
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={submitUser} className="space-y-3">
                  {view === "register" && (
                    <>
                      <input
                        className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <input
                        className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </>
                  )}

                  <input
                    type="email"
                    className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded"
                        disabled={loading}
                      >
                        {loading
                          ? "Please wait"
                          : view === "register"
                          ? "Register"
                          : "Login"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div>
              <h4 className="mb-3 font-medium">Admin login</h4>
              {message && (
                <div className="p-3 mb-3 text-sm bg-gray-100 dark:bg-gray-900 rounded">
                  {message}
                </div>
              )}

              <form onSubmit={submitAdmin} className="space-y-3">
                <input
                  type="email"
                  className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                  placeholder="Admin Email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                    disabled={loading}
                  >
                    {loading ? "Please wait" : "Sign in"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
