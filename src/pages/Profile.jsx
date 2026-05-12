import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import { useState } from "react";

export default function Profile() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (

    <div className="flex bg-[#050816] min-h-screen">

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 p-6">

        <Topbar setMobileOpen={setMobileOpen} />

        <div className="
          mt-6
          bg-[#081028]
          rounded-3xl
          p-10
          text-white
        ">

          <div className="flex flex-col lg:flex-row gap-10 items-center">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="
              w-40 h-40 rounded-full
              border-4 border-cyan-400
            "
            />

            <div>

              <h1 className="text-4xl font-bold">
                Dr. Sarah Wilson
              </h1>

              <p className="text-cyan-400 mt-2">
                Senior Cardiologist
              </p>

              <div className="mt-6 space-y-3 text-slate-300">

                <p>Email: sarah@hospital.com</p>

                <p>Department: ICU Surgery</p>

                <p>Experience: 12 Years</p>

                <p>Status: Online</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}