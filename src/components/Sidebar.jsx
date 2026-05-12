import {
  Activity,
  UserRound,
  Stethoscope,
  FileText,
  Settings,
  Search,
  Menu,
  HeartPulse,
  Brain,
  Bell,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom"; // 1. Import useLocation

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const location = useLocation(); // 2. Get the current path

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          fixed lg:sticky
          top-0 left-0
          h-screen w-[280px]
          bg-[#081028]
          border-r border-slate-800
          z-50 flex flex-col
          transition-transform duration-300
          shrink-0
        `}
      >
        {/* TOP */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="logo"
                className="w-14 h-14"
              />
              <div>
                <h1 className="text-white text-2xl font-bold">AI Hospital</h1>
                <p className="text-slate-400 text-sm">Surgical System</p>
              </div>
            </div>
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(false)}
            >
              <Menu />
            </button>
          </div>

          <div className="mt-8 bg-slate-900 rounded-2xl flex items-center px-4">
            <Search className="text-slate-400" size={18} />
            <input
              placeholder="Search..."
              className="bg-transparent outline-none py-4 px-3 text-white w-full"
            />
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 overflow-y-auto px-4 pb-6">
          <div className="space-y-3">
            {/* 3. Pass a comparison check to the 'active' prop */}
            <NavButton
              to="/"
              icon={<Activity size={20} />}
              text="Dashboard"
              active={location.pathname === "/"}
            />
            <NavButton
              to="/patients"
              icon={<UserRound size={20} />}
              text="Patients"
              active={location.pathname === "/patients"}
            />
            <NavButton
              to="/doctors"
              icon={<Stethoscope size={20} />}
              text="Doctors"
              active={location.pathname === "/doctors"}
            />
            <NavButton
              to="/reports"
              icon={<FileText size={20} />}
              text="Lab Reports"
              active={location.pathname === "/reports"}
            />
            <NavButton
              to="/analytics"
              icon={<Brain size={20} />}
              text="AI Analytics"
              active={location.pathname === "/analytics"}
            />
            <NavButton
              to="/monitoring"
              icon={<HeartPulse size={20} />}
              text="Monitoring"
              active={location.pathname === "/monitoring"}
            />
            <NavButton
              to="/alerts"
              icon={<Bell size={20} />}
              text="Emergency Alerts"
              active={location.pathname === "/alerts"}
            />
            <NavButton
              to="/settings"
              icon={<Settings size={20} />}
              text="Settings"
              active={location.pathname === "/settings"}
            />
          </div>

          {/* ALERT BOX */}
          <div className="mt-10 bg-red-950 border border-red-700 rounded-3xl p-5">
            <div className="flex items-center gap-3 text-red-400">
              <Bell />
              <h2 className="font-bold">Emergency Alert</h2>
            </div>
            <p className="text-slate-300 mt-4">ICU Room 07</p>
            <p className="text-red-400 mt-2">High Heart Rate Detected</p>
            <button className="mt-5 w-full bg-red-600 hover:bg-red-700 py-3 rounded-2xl transition text-white">
              View Alert
            </button>
          </div>
        </div>

        {/* PROFILE */}
        <div className="p-4 border-t border-slate-800">
          <Link to="/profile">
            <div className="bg-slate-900 hover:bg-slate-800 transition rounded-3xl p-4 flex items-center gap-4 cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="doctor"
                className="w-14 h-14 rounded-full border-2 border-cyan-400"
              />
              <div>
                <h2 className="text-white font-bold">Dr. Sarah Wilson</h2>
                <p className="text-slate-400 text-sm">Senior Cardiologist</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-green-400 text-sm">Online</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

function NavButton({ to, icon, text, active }) {
  return (
    <Link
      to={to}
      className={`
        flex items-center gap-4
        p-4 rounded-2xl
        transition
        ${
          active
            ? "bg-cyan-500 text-black font-bold"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }
      `}
    >
      {icon}
      {text}
    </Link>
  );
}