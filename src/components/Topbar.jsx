import { useState, useEffect, useRef } from "react";
import { Bell, Menu, X, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar({ setMobileOpen }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, text: "High Heart Rate: ICU Room 07", time: "2m ago", urgent: true },
    { id: 2, text: "Lab Report ready: Patient #204", time: "15m ago", urgent: false },
    { id: 3, text: "Surgery scheduled for 2:00 PM", time: "1h ago", urgent: false },
  ];

  return (
    <div className="sticky top-0 z-30 lg:relative lg:top-auto">
      <div className="
        bg-[#081028]/80 backdrop-blur-md 
        border-b border-slate-800 lg:border-none
        lg:rounded-3xl
        p-4 flex justify-between items-center
      ">
        <div className="flex items-center gap-4">
          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden bg-slate-900 p-3 rounded-2xl text-white hover:bg-slate-800 transition"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div>
            <h1 className="text-lg lg:text-3xl font-bold text-white truncate max-w-[180px] sm:max-w-none">
              Monitoring Dashboard
            </h1>
            <p className="hidden sm:block text-slate-400 text-sm">
              Real-Time Surgical System
            </p>
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 lg:gap-4">
          
          {/* NOTIFICATION DROPBOX */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`
                p-3 rounded-2xl relative transition
                ${showNotifications ? "bg-cyan-500 text-black" : "bg-slate-900 text-white hover:bg-slate-800"}
              `}
            >
              <Bell size={20} />
              {notifications.length > 0 && (
                <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#081028]"></div>
              )}
            </button>

            {/* DROPDOWN MENU */}
            {showNotifications && (
              <div className="
                absolute right-0 mt-3 w-80 
                bg-[#0f172a] border border-slate-700 
                rounded-3xl shadow-2xl overflow-hidden
                animate-in fade-in zoom-in duration-200
              ">
                <div className="p-4 border-b border-slate-700 flex justify-between items-center">
                  <h3 className="text-white font-bold">Notifications</h3>
                  <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full">
                    {notifications.length} New
                  </span>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((n) => (
                    <div 
                      key={n.id} 
                      className="p-4 border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer transition"
                    >
                      <div className="flex gap-3">
                        <div className={`mt-1 ${n.urgent ? "text-red-500" : "text-cyan-500"}`}>
                          <Info size={16} />
                        </div>
                        <div>
                          <p className={`text-sm ${n.urgent ? "text-white font-medium" : "text-slate-300"}`}>
                            {n.text}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{n.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 text-sm text-cyan-400 hover:bg-slate-800 transition font-medium">
                  View All Notifications
                </button>
              </div>
            )}
          </div>

          {/* PROFILE */}
          <Link to="/profile">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="
                w-10 h-10 lg:w-12 lg:h-12 rounded-full
                border-2 border-cyan-400
                hover:scale-105 transition
                cursor-pointer
              "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}