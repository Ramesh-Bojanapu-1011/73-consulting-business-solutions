import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import React from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// Default data (used as fallback)
const DEFAULT_WEEKLY = [
  { name: "Mon", appointments: 120, consultations: 80, cancelled: 5 },
  { name: "Tue", appointments: 150, consultations: 95, cancelled: 2 },
  { name: "Wed", appointments: 170, consultations: 110, cancelled: 6 },
  { name: "Thu", appointments: 140, consultations: 90, cancelled: 4 },
  { name: "Fri", appointments: 190, consultations: 130, cancelled: 3 },
  { name: "Sat", appointments: 80, consultations: 45, cancelled: 1 },
  { name: "Sun", appointments: 60, consultations: 30, cancelled: 0 },
];

// helper to read JSON from localStorage safely
const readLocal = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    return fallback;
  }
};

// Updated, richer color palette
const COLORS = ["#3B82F6", "#10B981", "#EF4444"]; // Blue, Green, Red

const ClientDate: React.FC = () => {
  const [dateStr, setDateStr] = React.useState("");
  React.useEffect(() => {
    setDateStr(new Date().toLocaleDateString());
  }, []);
  // render an empty placeholder on the server, fill on the client to avoid hydration mismatch
  return (
    <span className="font-semibold text-gray-800 dark:text-gray-200">
      {dateStr}
    </span>
  );
};

const adminDashboard: React.FC = () => {
  const [weekly, setWeekly] = React.useState<typeof DEFAULT_WEEKLY | null>(
    null,
  );
  const [pieData, setPieData] = React.useState<
    Array<{ name: string; value: number }>
  >([]);
  const [activityWeekly, setActivityWeekly] = React.useState<
    Array<{ day: string; logins: number; logouts: number }>
  >([]);
  const [usersPie, setUsersPie] = React.useState<
    Array<{ name: string; value: number }>
  >([]);

  React.useEffect(() => {
    // load weekly data from localStorage or fallback
    const fromLocal = readLocal("dashboard_weekly", DEFAULT_WEEKLY);
    setWeekly(fromLocal);

    // compute pie totals
    const totalAppointments = fromLocal.reduce(
      (s, d) => s + (d.appointments || 0),
      0,
    );
    const totalConsultations = fromLocal.reduce(
      (s, d) => s + (d.consultations || 0),
      0,
    );
    const totalCancelled = fromLocal.reduce(
      (s, d) => s + (d.cancelled || 0),
      0,
    );

    setPieData([
      { name: "Appointments", value: totalAppointments },
      { name: "Consultations", value: totalConsultations },
      { name: "Cancelled", value: totalCancelled },
    ]);

    // load All_Users and compute last 7 days login/logout activity
    const users = readLocal<any[]>("All_Users", []);

    // prepare last 7 days labels starting today and going backwards
    const days: string[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toLocaleDateString());
    }

    const activity = days.map((dayStr) => {
      const dayStart = new Date(dayStr);
      // Normalize dayStart to start of day in local timezone
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      let logins = 0;
      let logouts = 0;
      users.forEach((u) => {
        if (u.loginTime) {
          const lt = new Date(u.loginTime);
          if (lt >= dayStart && lt <= dayEnd) logins += 1;
        }
        if (u.logoutTime) {
          const lt = new Date(u.logoutTime);
          if (lt >= dayStart && lt <= dayEnd) logouts += 1;
        }
      });

      return { day: dayStr, logins, logouts };
    });

    setActivityWeekly(activity);

    // compute users pie: logged vs not-logged (presence of loginTime)
    const totalUsers = users.length;
    const logged = users.filter((u) => !!u.loginTime).length;
    const notLogged = totalUsers - logged;
    setUsersPie([
      { name: "Logged", value: logged },
      { name: "Not Logged", value: notLogged },
    ]);
  }, []);

  // guard: render nothing (or a loader) server-side and until data is hydrated
  if (!weekly) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard — Enkonix</title>
      </Head>
      <SiteHeadder />

      <div className=" max-w-screen  mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 text-gray-800 dark:text-gray-100">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-700 mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Dashboard Overview
          </h1>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            Current Date — <ClientDate />
          </div>
        </header>

        {/* STATS CARDS - Added Gradient, stronger shadow, rounded-xl, and hover effect */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Card 1: Appointments (Primary Blue/Indigo) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-5 border-l-4 border-blue-500">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Appointments
            </div>
            <div className="text-3xl font-bold mt-1 text-blue-600 dark:text-blue-400">
              150
            </div>
            <div className="text-xs font-semibold text-green-500 mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              +11% vs last week
            </div>
          </div>
          {/* Card 2: Consultations (Secondary Teal/Cyan) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-5 border-l-4 border-teal-500">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Consultations
            </div>
            <div className="text-3xl font-bold mt-1 text-teal-600 dark:text-teal-400">
              95
            </div>
            <div className="text-xs font-semibold text-red-500 mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-1 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              -6.6% vs last week
            </div>
          </div>
          {/* Card 3: Cancelled (Warning Red) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-5 border-l-4 border-red-500">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Cancelled
            </div>
            <div className="text-3xl font-bold mt-1 text-red-600 dark:text-red-400">
              3
            </div>
            <div className="text-xs font-semibold text-green-500 mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              +0.9% vs last week
            </div>
          </div>
          {/* Card 4: Urgent Resolve (Gold/Yellow) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-5 border-l-4 border-yellow-500">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Urgent Resolve
            </div>
            <div className="text-3xl font-bold mt-1 text-yellow-600 dark:text-yellow-400">
              5
            </div>
            <div className="text-xs font-semibold text-green-500 mt-2 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              +0.1% vs last week
            </div>
          </div>
        </section>

        {/* CHARTS SECTION - Added richer background and rounded-xl */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 min-h-0">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">
              User activity (last 7 days)
            </h3>
            <div style={{ width: "100%", height: 300, minHeight: 0 }}>
              {/* Line chart for logins/logouts */}

              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={activityWeekly}
                  margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="logins"
                    stroke={COLORS[0]}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="logouts"
                    stroke={COLORS[2]}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 min-h-0">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">
              Service Breakdown
            </h3>
            <div
              style={{
                width: "100%",
                height: 250,
                minHeight: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", height: "100%", display: "grid" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={usersPie}
                        dataKey="value"
                        nameKey="name"
                        paddingAngle={2}
                        label={(p) =>
                          `${p.name ?? "Unknown"}: ${(Number(p.percent ?? 0) * 100).toFixed(0)}%`
                        }
                      >
                        {usersPie.map((entry, index) => (
                          <Cell
                            key={`u-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENTS TABLE - Enhanced styling */}
        <section className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">
            Today's Appointments
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="text-sm font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-3 px-2">Name</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 hidden sm:table-cell">Date</th>
                  <th className="py-3 px-2">Time</th>
                  <th className="py-3 px-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Abdullah A. Shuvo",
                  "Al Shahriar Shawon",
                  "Lyn R. Lemus",
                  "Katherine A. Stanfill",
                ].map((name, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
                  >
                    <td className="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">
                      {name}
                    </td>
                    <td
                      className={`py-3 px-2 text-sm font-medium ${
                        i % 2 === 0 ? "text-blue-500" : "text-green-500"
                      }`}
                    >
                      {i % 2 === 0 ? "Consultation" : "Appointment"}
                    </td>
                    <td className="py-3 px-2 text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                      <ClientDate />
                    </td>
                    <td className="py-3 px-2 font-mono text-sm">{`${
                      9 + i
                    }:00 AM`}</td>
                    <td className="py-3 px-2 text-right">
                      <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs sm:text-sm font-medium shadow-md transition duration-150 whitespace-nowrap">
                        View details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  );
};

export default adminDashboard;
