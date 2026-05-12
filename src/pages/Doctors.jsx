import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Search,
  Stethoscope,
  HeartPulse,
  Brain,
  Activity,
  UserRound,
  Phone,
  Mail,
} from "lucide-react";

export default function Doctors() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const doctors = [

    {
      id: 1,
      name: "Dr. Sarah Wilson",
      role: "Senior Cardiologist",
      experience: "12 Years",
      specialization: "Heart Surgery",
      patients: 14,
      activeCases: 4,
      emergencyCases: 1,
      email: "sarahwilson@hospital.ai",
      phone: "+91 9876543210",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",

      patientList: [
        "John Michael Doe",
        "Emma Watson",
        "David Lee",
      ],

      cases: [
        "Heart Transplant",
        "ECG Monitoring",
        "ICU Observation",
      ],

      about:
        "Experienced cardiologist specializing in advanced cardiac surgeries and ICU monitoring systems.",

    },

    {
      id: 2,
      name: "Dr. James Cooper",
      role: "Neurosurgeon",
      experience: "10 Years",
      specialization: "Brain Surgery",
      patients: 9,
      activeCases: 3,
      emergencyCases: 2,
      email: "jamescooper@hospital.ai",
      phone: "+91 9988776655",
      image:
        "https://randomuser.me/api/portraits/men/52.jpg",

      patientList: [
        "Michael Lee",
        "Sophia Brown",
      ],

      cases: [
        "Brain Tumor",
        "Neural Scan",
        "Emergency Surgery",
      ],

      about:
        "Expert neurosurgeon handling critical neurological surgeries and AI-assisted operations.",

    },

    {
      id: 3,
      name: "Dr. Emily Stone",
      role: "ICU Specialist",
      experience: "8 Years",
      specialization: "Critical Care",
      patients: 11,
      activeCases: 5,
      emergencyCases: 3,
      email: "emilystone@hospital.ai",
      phone: "+91 9123456780",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",

      patientList: [
        "Olivia Smith",
        "Daniel Clark",
      ],

      cases: [
        "Respiratory Support",
        "ICU Recovery",
        "AI Monitoring",
      ],

      about:
        "Critical care specialist focused on ICU management, recovery monitoring, and emergency support.",

    },

  ];

  return (

    <div className="
      flex
      bg-[#050816]
      h-screen
      overflow-hidden
    ">

      {/* SIDEBAR */}

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* MAIN */}

      <div className="
        flex-1
        overflow-y-auto
        p-4 lg:p-6
      ">

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

              Hospital Doctors Panel

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              AI-powered surgical specialists

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
              placeholder="Search doctors..."
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
            title="Total Doctors"
            value="18"
            icon={<Stethoscope />}
            color="text-cyan-400"
          />

          <StatCard
            title="Active Cases"
            value="42"
            icon={<HeartPulse />}
            color="text-red-400"
          />

          <StatCard
            title="AI Operations"
            value="12"
            icon={<Brain />}
            color="text-purple-400"
          />

          <StatCard
            title="ICU Monitoring"
            value="24"
            icon={<Activity />}
            color="text-green-400"
          />

        </div>

        {/* DOCTOR GRID */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        ">

          {doctors.map((doctor) => (

            <div
              key={doctor.id}
              className="
                bg-[#081028]
                rounded-3xl
                p-6
                text-white
              "
            >

              {/* TOP */}

              <div className="
                flex flex-col lg:flex-row
                gap-6
              ">

                <img
                  src={doctor.image}
                  className="
                    w-28 h-28 rounded-full
                    border-4 border-cyan-400
                  "
                />

                <div className="flex-1">

                  <div className="
                    flex flex-col lg:flex-row
                    justify-between
                    gap-4
                  ">

                    <div>

                      <h2 className="
                        text-2xl font-bold
                      ">

                        {doctor.name}

                      </h2>

                      <p className="
                        text-cyan-400 mt-2
                      ">

                        {doctor.role}

                      </p>

                    </div>

                    <div className="
                      bg-green-500/20
                      text-green-400
                      px-4 py-2
                      rounded-xl
                      h-fit
                    ">

                      ● ONLINE

                    </div>

                  </div>

                  <p className="
                    text-slate-300 mt-5
                  ">

                    {doctor.about}

                  </p>

                </div>

              </div>

              {/* INFO */}

              <div className="
                mt-6
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-4
              ">

                <InfoBox
                  title="Experience"
                  value={doctor.experience}
                />

                <InfoBox
                  title="Patients"
                  value={doctor.patients}
                />

                <InfoBox
                  title="Cases"
                  value={doctor.activeCases}
                />

                <InfoBox
                  title="Emergency"
                  value={doctor.emergencyCases}
                />

              </div>

              {/* CONTACT */}

              <div className="
                mt-6
                grid
                grid-cols-1 lg:grid-cols-2
                gap-4
              ">

                <div className="
                  bg-slate-900
                  rounded-2xl
                  p-4
                  flex items-center gap-4
                ">

                  <Mail className="text-cyan-400" />

                  <div>

                    <p className="
                      text-slate-400 text-sm
                    ">

                      Email

                    </p>

                    <p className="
                      text-white mt-1
                    ">

                      {doctor.email}

                    </p>

                  </div>

                </div>

                <div className="
                  bg-slate-900
                  rounded-2xl
                  p-4
                  flex items-center gap-4
                ">

                  <Phone className="text-cyan-400" />

                  <div>

                    <p className="
                      text-slate-400 text-sm
                    ">

                      Phone

                    </p>

                    <p className="
                      text-white mt-1
                    ">

                      {doctor.phone}

                    </p>

                  </div>

                </div>

              </div>

              {/* PATIENTS + CASES */}

              <div className="
                mt-6
                grid
                grid-cols-1 lg:grid-cols-2
                gap-6
              ">

                {/* PATIENTS */}

                <div className="
                  bg-slate-900
                  rounded-2xl
                  p-5
                ">

                  <div className="
                    flex items-center gap-3
                    mb-4
                  ">

                    <UserRound className="text-cyan-400" />

                    <h3 className="
                      font-bold text-lg
                    ">

                      Patients

                    </h3>

                  </div>

                  <div className="space-y-3">

                    {doctor.patientList.map((patient, index) => (

                      <div
                        key={index}
                        className="
                          bg-[#081028]
                          rounded-xl
                          p-3
                        "
                      >

                        {patient}

                      </div>

                    ))}

                  </div>

                </div>

                {/* CASES */}

                <div className="
                  bg-slate-900
                  rounded-2xl
                  p-5
                ">

                  <div className="
                    flex items-center gap-3
                    mb-4
                  ">

                    <HeartPulse className="text-red-400" />

                    <h3 className="
                      font-bold text-lg
                    ">

                      Active Cases

                    </h3>

                  </div>

                  <div className="space-y-3">

                    {doctor.cases.map((item, index) => (

                      <div
                        key={index}
                        className="
                          bg-[#081028]
                          rounded-xl
                          p-3
                        "
                      >

                        {item}

                      </div>

                    ))}

                  </div>

                </div>

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
      p-6
      text-white
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

function InfoBox({
  title,
  value,
}) {

  return (

    <div className="
      bg-slate-900
      rounded-2xl
      p-4
    ">

      <p className="
        text-slate-400 text-sm
      ">

        {title}

      </p>

      <h3 className="
        text-white font-bold mt-2
      ">

        {value}

      </h3>

    </div>

  );
}