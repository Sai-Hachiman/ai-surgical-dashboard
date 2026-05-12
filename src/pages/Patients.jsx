import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Search,
  HeartPulse,
  Activity,
  Thermometer,
} from "lucide-react";

export default function Patients() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const patients = [

    {
      id: 1,
      name: "John Michael Doe",
      age: 62,
      gender: "Male",
      blood: "O+",
      room: "ICU-07",
      status: "Stable",
      department: "Cardiology ICU",
      doctor: "Dr. Sarah Wilson",
      condition: "Heart Monitoring",
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
    },

    {
      id: 2,
      name: "Emma Watson",
      age: 54,
      gender: "Female",
      blood: "A+",
      room: "ICU-03",
      status: "Critical",
      department: "Neurology ICU",
      doctor: "Dr. James Cooper",
      condition: "Brain Surgery",
      image:
        "https://randomuser.me/api/portraits/women/14.jpg",
    },

    {
      id: 3,
      name: "Michael Lee",
      age: 48,
      gender: "Male",
      blood: "B+",
      room: "ICU-09",
      status: "Recovery",
      department: "Surgical ICU",
      doctor: "Dr. Robert King",
      condition: "Post Surgery",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

  ];

  const openPatient = (patient) => {

    localStorage.setItem(
      "selectedPatient",
      JSON.stringify(patient)
    );

    navigate("/");
  };

  return (

    <div className="flex bg-[#050816] h-screen overflow-hidden">

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 overflow-y-auto p-4 lg:p-6">

        <Topbar setMobileOpen={setMobileOpen} />

        {/* HEADER */}

        <div className="
          mt-6
          flex flex-col lg:flex-row
          justify-between
          gap-5
          items-center
        ">

          <div>

            <h1 className="
              text-3xl font-bold text-white
            ">

              ICU Patient Management

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              Real-time patient monitoring system

            </p>

          </div>

          {/* SEARCH */}

          <div className="
            w-full lg:w-[350px]
            bg-[#081028]
            rounded-2xl
            px-4
            flex items-center
          ">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              placeholder="Search patient..."
              className="
                w-full
                bg-transparent
                outline-none
                py-4 px-3
                text-white
              "
            />

          </div>

        </div>

        {/* STATS */}

        <div className="
          mt-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        ">

          <StatCard
            title="Total Patients"
            value="24"
            color="text-cyan-400"
            icon={<Activity />}
          />

          <StatCard
            title="Critical Cases"
            value="5"
            color="text-red-400"
            icon={<HeartPulse />}
          />

          <StatCard
            title="Stable Patients"
            value="16"
            color="text-green-400"
            icon={<Activity />}
          />

          <StatCard
            title="Recovery"
            value="3"
            color="text-yellow-400"
            icon={<Thermometer />}
          />

        </div>

        {/* PATIENTS */}

        <div className="
          mt-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {patients.map((patient) => (

            <div
              key={patient.id}
              onClick={() => openPatient(patient)}
              className="
                bg-[#081028]
                rounded-3xl
                p-6
                hover:bg-slate-800
                transition
                cursor-pointer
              "
            >

              <div className="
                flex items-center gap-5
              ">

                <img
                  src={patient.image}
                  className="
                    w-20 h-20 rounded-full
                    border-2 border-cyan-400
                  "
                />

                <div>

                  <h2 className="
                    text-white
                    text-xl font-bold
                  ">

                    {patient.name}

                  </h2>

                  <p className="
                    text-slate-400 mt-1
                  ">

                    {patient.gender} • {patient.age}

                  </p>

                  <p className="
                    text-cyan-400 mt-2
                  ">

                    {patient.room}

                  </p>

                </div>

              </div>

              <div className="
                mt-6
                bg-slate-900
                rounded-2xl
                p-4
              ">

                <p className="
                  text-slate-400 text-sm
                ">

                  Condition

                </p>

                <h3 className="
                  text-white font-bold mt-2
                ">

                  {patient.condition}

                </h3>

              </div>

              <div className="
                mt-6
                flex justify-between
                items-center
              ">

                <div className={`
                  px-4 py-2 rounded-xl text-sm
                  ${
                    patient.status === "Stable"
                      ? "bg-green-500/20 text-green-400"
                      : patient.status === "Critical"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }
                `}>

                  {patient.status}

                </div>

                <button className="
                  bg-cyan-500
                  text-black
                  px-5 py-2
                  rounded-xl
                  font-bold
                ">

                  Open Dashboard

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}) {

  return (

    <div className="
      bg-[#081028]
      rounded-3xl
      p-6 text-white
    ">

      <div className="
        flex justify-between items-center
      ">

        <div className={color}>
          {icon}
        </div>

        <div className="
          text-green-400 text-sm
        ">

          ● LIVE

        </div>

      </div>

      <p className="
        text-slate-400 mt-5
      ">

        {title}

      </p>

      <h1 className={`
        text-4xl font-bold mt-2
        ${color}
      `}>

        {value}

      </h1>

    </div>

  );
}