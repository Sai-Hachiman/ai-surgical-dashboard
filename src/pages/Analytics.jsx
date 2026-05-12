import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Brain,
  ShieldAlert,
  Activity,
  HeartPulse,
  AlertTriangle,
  CheckCircle2,
  ScanSearch,
  Workflow,
  Stethoscope,
  TimerReset,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

export default function Analytics() {

  const [mobileOpen, setMobileOpen] = useState(false);

  // AI RISK DATA

  const riskData = [
    { name: "Low Risk", value: 68 },
    { name: "Medium Risk", value: 22 },
    { name: "High Risk", value: 10 },
  ];

  const COLORS = [
    "#22c55e",
    "#facc15",
    "#ef4444",
  ];

  // SURGERY TIMELINE

  const surgeryData = [
    { step: 1, progress: 15 },
    { step: 2, progress: 30 },
    { step: 3, progress: 52 },
    { step: 4, progress: 70 },
    { step: 5, progress: 90 },
    { step: 6, progress: 100 },
  ];

  // PATIENT RECOVERY

  const recoveryData = [
    { day: "Mon", value: 72 },
    { day: "Tue", value: 75 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 82 },
    { day: "Fri", value: 85 },
    { day: "Sat", value: 88 },
  ];

  // AI ALERTS

  const alerts = [

    {
      title: "Blood Pressure Fluctuation",
      level: "Medium Risk",
      color: "yellow",
    },

    {
      title: "Possible Arrhythmia Detected",
      level: "High Risk",
      color: "red",
    },

    {
      title: "Oxygen Level Stable",
      level: "Safe",
      color: "green",
    },

  ];

  // SURGICAL WORKFLOW

  const workflow = [

    "Pre-operative AI risk scanning",

    "Real-time ECG & oxygen monitoring",

    "AI-assisted surgical navigation",

    "Complication prevention alerts",

    "Blood loss prediction tracking",

    "Post-surgery recovery optimization",

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
        ">

          <div>

            <h1 className="
              text-3xl font-bold text-white
            ">

              AI Surgical Analytics

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              AI-driven surgical intelligence system

            </p>

          </div>

          <div className="
            bg-cyan-500/20
            border border-cyan-500
            px-5 py-3
            rounded-2xl
            text-cyan-400
            h-fit
            font-bold
          ">

            ● AI ACTIVE MONITORING

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
            title="Complication Risk"
            value="12%"
            icon={<ShieldAlert />}
            color="text-red-400"
          />

          <StatCard
            title="Recovery Prediction"
            value="88%"
            icon={<HeartPulse />}
            color="text-green-400"
          />

          <StatCard
            title="Surgery Accuracy"
            value="96%"
            icon={<Brain />}
            color="text-cyan-400"
          />

          <StatCard
            title="AI Efficiency"
            value="91%"
            icon={<Activity />}
            color="text-purple-400"
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

          {/* RISK ASSESSMENT */}

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

                AI Risk Assessment

              </h2>

            </div>

            <div className="h-[280px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={riskData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                  >

                    {riskData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index % COLORS.length
                          ]
                        }
                      />

                    ))}

                  </Pie>

                </PieChart>

              </ResponsiveContainer>

            </div>

            <div className="
              mt-4
              space-y-3
            ">

              <RiskLabel
                color="bg-green-500"
                text="Low Risk"
              />

              <RiskLabel
                color="bg-yellow-500"
                text="Medium Risk"
              />

              <RiskLabel
                color="bg-red-500"
                text="High Risk"
              />

            </div>

          </div>

          {/* SURGICAL PLANNING */}

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

              <Workflow className="text-cyan-400" />

              <h2 className="
                text-2xl font-bold
              ">

                AI Surgical Planning

              </h2>

            </div>

            <div className="h-[300px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart data={surgeryData}>

                  <Line
                    type="monotone"
                    dataKey="progress"
                    stroke="#00ffff"
                    strokeWidth={4}
                    dot={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

            <div className="
              mt-5
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
            ">

              {workflow.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-slate-900
                    rounded-2xl
                    p-4
                    flex items-center gap-3
                  "
                >

                  <CheckCircle2
                    className="text-green-400"
                  />

                  <p>{item}</p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* SECOND GRID */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        ">

          {/* RECOVERY */}

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

              <TimerReset className="text-green-400" />

              <h2 className="
                text-2xl font-bold
              ">

                Recovery Prediction

              </h2>

            </div>

            <div className="h-[300px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <AreaChart data={recoveryData}>

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    fill="#22c55e"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* AI ALERTS */}

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

              <AlertTriangle className="text-red-400" />

              <h2 className="
                text-2xl font-bold
              ">

                AI Alerts & Guidance

              </h2>

            </div>

            <div className="space-y-5">

              {alerts.map((alert, index) => (

                <div
                  key={index}
                  className={`
                    rounded-2xl
                    p-5
                    border

                    ${
                      alert.color === "red"
                        ? "bg-red-500/10 border-red-500"
                        : alert.color === "yellow"
                        ? "bg-yellow-500/10 border-yellow-500"
                        : "bg-green-500/10 border-green-500"
                    }
                  `}
                >

                  <div className="
                    flex justify-between
                    items-center
                  ">

                    <h3 className="
                      text-lg font-bold
                    ">

                      {alert.title}

                    </h3>

                    <span className={`
                      px-3 py-1 rounded-xl text-sm

                      ${
                        alert.color === "red"
                          ? "bg-red-500 text-white"
                          : alert.color === "yellow"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500 text-black"
                      }
                    `}>

                      {alert.level}

                    </span>

                  </div>

                  <p className="
                    text-slate-300 mt-3
                  ">

                    AI suggests immediate
                    monitoring and optimized
                    surgical workflow adjustments.

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* OVERVIEW */}

        <div className="
          mt-6
          bg-[#081028]
          rounded-3xl
          p-6
          text-white
        ">

          <div className="
            flex items-center gap-3
            mb-6
          ">

            <ScanSearch className="text-cyan-400" />

            <h2 className="
              text-2xl font-bold
            ">

              AI Patient Overview

            </h2>

          </div>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          ">

            <OverviewCard
              title="Blood Requirement"
              value="2 Units"
            />

            <OverviewCard
              title="Surgery Duration"
              value="4.5 Hours"
            />

            <OverviewCard
              title="Complication Chance"
              value="12%"
            />

            <OverviewCard
              title="AI Confidence"
              value="96%"
            />

          </div>

          <div className="
            mt-6
            bg-slate-900
            rounded-2xl
            p-5
            leading-relaxed
            text-slate-300
          ">

            AI system predicts a high probability
            of successful recovery with low
            complication risk. Recommended workflow
            includes enhanced ECG monitoring,
            optimized blood flow tracking,
            and AI-assisted surgical navigation
            throughout the operation.

          </div>

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

function RiskLabel({
  color,
  text,
}) {

  return (

    <div className="
      flex items-center gap-3
    ">

      <div className={`
        w-4 h-4 rounded-full
        ${color}
      `} />

      <p>{text}</p>

    </div>

  );
}

function OverviewCard({
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

      <h3 className="
        text-2xl font-bold
        text-cyan-400
        mt-3
      ">

        {value}

      </h3>

    </div>

  );
}