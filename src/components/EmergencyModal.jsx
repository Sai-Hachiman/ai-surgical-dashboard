import React, { useState, useEffect } from "react";
import { Bell, X, Activity, ChevronRight } from "lucide-react";

export default function EmergencyModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Trigger the popup on startup
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // Small delay for better UX effect
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* BACKDROP */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* MODAL CARD */}
      <div className="
        relative w-full max-w-md 
        bg-[#0f172a] border-2 border-red-500/50 
        rounded-[2.5rem] shadow-[0_0_50px_rgba(239,68,68,0.3)]
        overflow-hidden animate-in zoom-in-95 duration-300
      ">
        {/* TOP RED BAR */}
        <div className="bg-red-600 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Bell className="animate-bounce" size={20} />
            <span className="font-bold tracking-wider uppercase text-sm">Priority Alpha</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-1 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center text-center">
            {/* ICON CIRCLE */}
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
              <Activity size={40} className="text-red-500" />
            </div>

            <h2 className="text-3xl font-black text-white mb-2">
              Emergency Alert
            </h2>
            
            <div className="space-y-1 mb-8">
              <p className="text-slate-400 text-lg uppercase tracking-widest font-semibold">
                ICU Room 07
              </p>
              <p className="text-red-400 text-xl font-bold italic">
                High Heart Rate Detected
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-1 w-full gap-3">
              <button 
                onClick={() => setIsOpen(false)}
                className="
                  group flex items-center justify-center gap-2
                  bg-red-600 hover:bg-red-700 
                  text-white font-bold py-4 rounded-2xl 
                  transition-all active:scale-95 shadow-lg shadow-red-900/20
                "
              >
                View Alert Details
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white transition text-sm font-medium"
              >
                Dismiss for now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}