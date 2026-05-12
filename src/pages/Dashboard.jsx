import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EmergencyModal from "../components/EmergencyModal";

import {
  Activity,
  AlertTriangle,
  Brain,
  HeartPulse,
  ShieldAlert,
  Syringe,
  TimerReset,
  UserRound,
  ScanLine,
  BedDouble,
  Stethoscope,
  Droplets,
  Waves,
  Hospital,
  Microscope,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

export default function Dashboard() {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  // SELECTED PATIENT

  const selectedPatient = JSON.parse(
    localStorage.getItem("selectedPatient")
  ) || {

    id: "PT-2201",

    name: "John Michael Doe",

    age: 48,

    gender: "Male",

    room: "ICU - 04",

    risk: "High",

    doctor: "Dr. Sarah Wilson",

    admitted: "09 May 2026",

    issue: "Cardiac Surgery",

    image:
      "https://i.pravatar.cc/300?img=12",

  };

  // LIVE ECG

  const [ecgData, setEcgData] =
    useState(
      Array.from(
        { length: 40 },
        (_, i) => ({
          time: i,
          value:
            70 +
            Math.sin(i / 2) * 18,
        })
      )
    );

  useEffect(() => {

    const interval = setInterval(() => {

      setEcgData((prev) => {

        const next = {

          time: prev.length,

          value:
            70 +
            Math.sin(Date.now() / 100) *
              18 +
            Math.random() * 10,

        };

        return [
          ...prev.slice(1),
          next,
        ];

      });

    }, 180);

    return () => clearInterval(interval);

  }, []);

  // AI PIE

  const aiRisk = [
    { name: "Low Risk", value: 68 },
    { name: "Medium Risk", value: 22 },
    { name: "High Risk", value: 10 },
  ];

  const COLORS = [
    "#22c55e",
    "#facc15",
    "#ef4444",
  ];

  // ANALYTICS

  const analytics = [

    {
      name: "Mon",
      value: 70,
    },

    {
      name: "Tue",
      value: 85,
    },

    {
      name: "Wed",
      value: 78,
    },

    {
      name: "Thu",
      value: 90,
    },

    {
      name: "Fri",
      value: 95,
    },

  ];

  // SURGERY STAGES

  const stages = [

    "Patient Preparation",

    "Anesthesia Induction",

    "Incision & Exposure",

    "Surgical Procedure",

    "Hemostasis",

    "Closure & Suturing",

    "Recovery Transfer",

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

        <Topbar
          setMobileOpen={setMobileOpen}
        />

        {/* HEADER */}

        <div className="
          mt-6
          flex flex-col lg:flex-row
          justify-between
          gap-5
        ">

          <div>

            <h1 className="
              text-3xl font-bold text-white
            ">

              AI Surgical Dashboard

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              Real-time operation theatre
              monitoring system

            </p>

          </div>

          <div className="
            bg-red-500/20
            border border-red-500
            px-5 py-3
            rounded-2xl
            text-red-400
            font-bold
            h-fit
          ">

            ● EMERGENCY ACTIVE

          </div>

        </div>

        {/* TOP STATS */}

        <div className="
          mt-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-6
          gap-5
        ">

          <StatCard
            title="Active Surgeries"
            value="14"
            icon={<Hospital />}
            color="text-cyan-400"
          />

          <StatCard
            title="Emergency Alerts"
            value="3"
            icon={<AlertTriangle />}
            color="text-red-400"
          />

          <StatCard
            title="ICU Occupancy"
            value="82%"
            icon={<BedDouble />}
            color="text-yellow-400"
          />

          <StatCard
            title="Available Doctors"
            value="27"
            icon={<Stethoscope />}
            color="text-green-400"
          />

          <StatCard
            title="OR Room Status"
            value="8/10"
            icon={<ShieldAlert />}
            color="text-purple-400"
          />

          <StatCard
            title="AI Accuracy"
            value="96%"
            icon={<Brain />}
            color="text-pink-400"
          />

        </div>

        {/* MAIN GRID */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        ">

      {/* This will pop up automatically when the dashboard loads */}
      <EmergencyModal />  

          {/* PATIENT */}

          <div className="
            xl:col-span-4
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-4
            ">

              <img
                src={selectedPatient.image}
                alt=""
                className="
                  w-24 h-24
                  rounded-2xl
                  object-cover
                "
              />

              <div>

                <h2 className="
                  text-2xl font-bold
                ">

                  {selectedPatient.name}

                </h2>

                <p className="
                  text-slate-400 mt-1
                ">

                  Patient ID:
                  {" "}
                  {selectedPatient.id}

                </p>

                <div className="
                  mt-3
                  inline-block
                  bg-red-500/20
                  text-red-400
                  px-3 py-1
                  rounded-xl
                  text-sm
                ">

                  {selectedPatient.risk}
                  {" "}
                  Risk

                </div>

              </div>

            </div>

            <div className="
              mt-6
              grid
              grid-cols-2
              gap-4
            ">

              <InfoBox
                title="Age"
                value={selectedPatient.age}
              />

              <InfoBox
                title="Gender"
                value={selectedPatient.gender}
              />

              <InfoBox
                title="Room"
                value={selectedPatient.room}
              />

              <InfoBox
                title="Admitted"
                value={selectedPatient.admitted}
              />

            </div>

            <div className="
              mt-5
              bg-slate-900
              rounded-2xl
              p-5
            ">

              <p className="
                text-slate-400
              ">

                Assisted Doctor

              </p>

              <h3 className="
                text-xl font-bold
                text-cyan-400
                mt-2
              ">

                {selectedPatient.doctor}

              </h3>

              <p className="
                text-slate-300 mt-4
              ">

                Case Issue:
                {" "}
                {selectedPatient.issue}

              </p>

            </div>

          </div>

          {/* LIVE ECG */}

          <div className="
            xl:col-span-8
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex justify-between items-center
              mb-6
            ">

              <div className="
                flex items-center gap-3
              ">

                <HeartPulse className="
                  text-green-400
                " />

                <h2 className="
                  text-2xl font-bold
                ">

                  Live ECG Monitoring

                </h2>

              </div>

              <div className="
                bg-green-500/20
                text-green-400
                px-4 py-2
                rounded-xl
              ">

                ● LIVE

              </div>

            </div>

            <div className="h-[340px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart data={ecgData}>

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#00ff99"
                    strokeWidth={3}
                    dot={false}
                    isAnimationActive={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

                        <div className="
              mt-6
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
            ">

              <InfoBox
                title="Heart Rate"
                value="72 bpm"
              />

              <InfoBox
                title="Rhythm"
                value="normal sinus"
              />

              <InfoBox
                title="PR Interval"
                value="160 ms"
              />

              <InfoBox
                title="QRS Duration"
                value="90 ms"
              />

            </div>

          </div>

        </div>

        {/* LIVE MONITORING */}

        <div className="
          mt-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-5
          gap-5
        ">

          <MiniCard
            title="Heart Rate"
            value="82 BPM"
            icon={<HeartPulse />}
          />

          <MiniCard
            title="Blood Pressure"
            value="120/80"
            icon={<Activity />}
          />

          <MiniCard
            title="Blood Loss"
            value="340 ml"
            icon={<Droplets />}
          />

          <MiniCard
            title="Oxygen Level"
            value="97%"
            icon={<Waves />}
          />

          <MiniCard
            title="Surgery Timer"
            value="02h 18m"
            icon={<TimerReset />}
          />

        </div>

        {/* SURGERY STAGES + AI */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        ">

          {/* STAGES */}

          <div className="
            xl:col-span-5
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-3
              mb-6
            ">

              <CheckCircle2 className="
                text-cyan-400
              " />

              <h2 className="
                text-2xl font-bold
              ">

                Current Procedure Stages

              </h2>

            </div>

            <div className="space-y-4">

              {stages.map((stage, index) => (

                <div
                  key={index}
                  className={`
                    rounded-2xl
                    p-4
                    flex items-center gap-4

                    ${
                      index < 4
                        ? "bg-cyan-500/10 border border-cyan-500"
                        : "bg-slate-900"
                    }
                  `}
                >

                  <div className="
                    w-10 h-10
                    rounded-full
                    bg-cyan-500
                    text-black
                    font-bold
                    flex items-center justify-center
                  ">

                    {index + 1}

                  </div>

                  <p className="
                    font-medium
                  ">

                    {stage}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* AI */}

          <div className="
            xl:col-span-7
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-3
              mb-6
            ">

              <Brain className="
                text-purple-400
              " />

              <h2 className="
                text-2xl font-bold
              ">

                AI Monitoring Features

              </h2>

            </div>

            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            ">

              <AIBox
                title="Complication Prediction"
                value="12%"
              />

              <AIBox
                title="Mortality Risk"
                value="8%"
              />

              <AIBox
                title="ICU Transfer Probability"
                value="42%"
              />

              <AIBox
                title="Bleeding Risk"
                value="Medium"
              />

              <AIBox
                title="Infection Probability"
                value="14%"
              />

              <AIBox
                title="Readmission Risk"
                value="9%"
              />

            </div>

                        <div className="
              mt-6
              bg-slate-900
              rounded-2xl
              p-5
            ">

              <h3 className="
                text-xl font-bold
                text-cyan-400
              ">

                AI Surgical Guidance

              </h3>

              <p className="
                text-slate-300 mt-3
                leading-relaxed
              ">

                Detecting anatomy during surgery
                Highlighting tumors or blood vessels
                Surgical path Planning
                Predicting complications

              </p>

            </div>

          </div>

        </div>

        {/* IMAGING + ANESTHESIA */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        ">

          {/* IMAGING */}

          <div className="
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-3
              mb-6
            ">

              <ScanLine className="
                text-cyan-400
              " />

              <h2 className="
                text-2xl font-bold
              ">

                Imaging Reports

              </h2>

            </div>

            <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
            ">

              <ImageCard title="CT Scan" />

              <ImageCard title="MRI Scan" />

              <ImageCard title="X-Ray" />

            </div>

            <div className="
              mt-6
              bg-slate-900
              rounded-2xl
              p-5
            ">

              <h3 className="
                text-xl font-bold
                text-cyan-400
              ">

                Surgical Navigation Guidance

              </h3>

              <p className="
                text-slate-300 mt-3
                leading-relaxed
              ">

                AI suggests optimized
                navigation path avoiding
                critical blood vessels and
                minimizing tissue damage.

              </p>

            </div>

          </div>

          {/* ANESTHESIA */}

          <div className="
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-3
              mb-6
            ">

              <Syringe className="
                text-yellow-400
              " />

              <h2 className="
                text-2xl font-bold
              ">

                Anesthesia Monitoring

              </h2>

            </div>

            <div className="
              grid
              grid-cols-2
              gap-5
            ">

              <InfoBox
                title="Sedation Level"
                value="72%"
              />

              <InfoBox
                title="Ventilator"
                value="Stable"
              />

              <InfoBox
                title="Oxygen Delivery"
                value="98%"
              />

              <InfoBox
                title="Drug Dosage"
                value="5.2 ml/h"
              />

            </div>

          </div>

        </div>

        {/* ANALYTICS */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        ">

          {/* AI OVERVIEW */}

          <div className="
            xl:col-span-4
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-3
              mb-6
            ">

              <ShieldAlert className="text-red-400" />

              <h2 className="
                text-2xl font-bold
              ">

                AI Risk Overview

              </h2>

            </div>

            <div className="bg-[#081028] rounded-3xl p-6">

                <h2 className="text-2xl font-bold mb-5 text-cyan-400">
                    Analysis Report
                </h2>

            <div className="space-y-4">

            <div className="bg-slate-900 p-4 rounded-2xl">
                Patient stable.
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl">
                ECG within normal range.
            </div>

            <div className="bg-red-900 p-4 rounded-2xl animate-pulse">
                Emergency warning system ready.
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl">
                AI predicts 92% recovery probability.
            </div>

      </div>

    </div>

          </div>

          {/* ANALYTICS */}

          <div className="
            xl:col-span-8
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
          ">

            <div className="
              flex items-center gap-3
              mb-6
            ">

              <TrendingUp className="
                text-green-400
              " />

              <h2 className="
                text-2xl font-bold
              ">

                Surgical Analytics

              </h2>

            </div>

            <div className="h-[300px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart data={analytics}>

                  <Bar
                    dataKey="value"
                    fill="#00ffff"
                    radius={[8, 8, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="
              mt-6
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
            ">

              <InfoBox
                title="Success Rate"
                value="96%"
              />

              <InfoBox
                title="Blood Usage"
                value="340 ml"
              />

              <InfoBox
                title="OR Utilization"
                value="84%"
              />

              <InfoBox
                title="Infection Rate"
                value="3%"
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

/* STAT CARD */

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
      p-5
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
        text-slate-400 mt-4
      ">

        {title}

      </p>

      <h2 className={`
        text-3xl font-bold mt-2
        ${color}
      `}>

        {value}

      </h2>

    </div>

  );
}

/* INFO */

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
        text-lg font-bold
        text-cyan-400
        mt-2
      ">

        {value}

      </h3>

    </div>

  );
}

/* MINI */

function MiniCard({
  title,
  value,
  icon,
}) {

  return (

    <div className="
      bg-[#081028]
      rounded-2xl
      p-5
      text-white
    ">

      <div className="
        flex justify-between items-center
      ">

        <div className="
          text-cyan-400
        ">

          {icon}

        </div>

        <div className="
          text-green-400 text-sm
        ">

          ● LIVE

        </div>

      </div>

      <p className="
        text-slate-400 mt-4
      ">

        {title}

      </p>

      <h2 className="
        text-2xl font-bold
        mt-2
      ">

        {value}

      </h2>

    </div>

  );
}

/* AI */

function AIBox({
  title,
  value,
}) {

  return (

    <div className="
      bg-slate-900
      rounded-2xl
      p-5
    ">

      <p className="
        text-slate-400
      ">

        {title}

      </p>

      <h2 className="
        text-2xl font-bold
        text-purple-400
        mt-3
      ">

        {value}

      </h2>

    </div>

  );
}

/* IMAGE */

function ImageCard({
  title,
}) {

  return (

    <div className="
      bg-slate-900
      rounded-2xl
      overflow-hidden
    ">

      <div className="
        h-36
        bg-gradient-to-br
        from-cyan-500/20
        to-purple-500/20
        flex items-center justify-center
      ">

        <Microscope className="
          text-cyan-400
          w-10 h-10
        " />

      </div>

      <div className="p-4">

        <h3 className="
          text-lg font-bold
          text-white
        ">

          {title}

        </h3>

        <p className="
          text-slate-400 mt-2
        ">

          AI analyzed imaging report
        
        </p>
        
      </div>
    
    </div>

  );
}