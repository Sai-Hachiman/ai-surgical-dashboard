import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  HeartPulse,
  Activity,
  Thermometer,
  Brain,
  ShieldAlert,
  AlertTriangle,
  TimerReset,
  Syringe,
  ScanHeart,
  Waves,
  Stethoscope,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Monitoring() {

  const [mobileOpen, setMobileOpen] = useState(false);

  // LIVE ECG

  const [ecgData, setEcgData] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      time: i,
      value: 60 + Math.random() * 40,
    }))
  );

  useEffect(() => {

    const interval = setInterval(() => {

      setEcgData((prev) => {

        const nextPoint = {

          time: prev.length,

          value:
            60 +
            Math.sin(Date.now() / 120) * 35 +
            Math.random() * 25,

        };

        return [
          ...prev.slice(1),
          nextPoint,
        ];

      });

    }, 200);

    return () => clearInterval(interval);

  }, []);

  // SURGERY PROGRESS

  const surgeryProgress = [
    { step: "Start", value: 10 },
    { step: "Prep", value: 25 },
    { step: "Operation", value: 65 },
    { step: "Closure", value: 90 },
    { step: "Finish", value: 100 },
  ];

  // AI RISK

  const riskData = [
    { name: "Low", value: 72 },
    { name: "Medium", value: 18 },
    { name: "High", value: 10 },
  ];

  const COLORS = [
    "#22c55e",
    "#facc15",
    "#ef4444",
  ];

  // ALERTS

  const alerts = [

    {
      title: "Low Oxygen Warning",
      status: "Critical",
      color: "red",
    },

    {
      title: "Ventilator Stable",
      status: "Normal",
      color: "green",
    },

    {
      title: "Sedation Level High",
      status: "Warning",
      color: "yellow",
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
        ">

          <div>

            <h1 className="
              text-3xl font-bold text-white
            ">

              Real-Time Surgical Monitoring

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              AI-powered operation theatre monitoring

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

            ● LIVE SURGERY ACTIVE

          </div>

        </div>

        {/* PRIMARY VITALS */}

        <div className="
          mt-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        ">

          <VitalCard
            title="Heart Rate"
            value="82 BPM"
            icon={<HeartPulse />}
            color="text-red-400"
          />

          <VitalCard
            title="Blood Pressure"
            value="120/80"
            icon={<Activity />}
            color="text-cyan-400"
          />

          <VitalCard
            title="Oxygen Saturation"
            value="97%"
            icon={<Waves />}
            color="text-green-400"
          />

          <VitalCard
            title="Temperature"
            value="36.7°C"
            icon={<Thermometer />}
            color="text-yellow-400"
          />

        </div>

        {/* ADVANCED MONITORING */}

        <div className="
          mt-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-5
          gap-6
        ">

          <MiniCard
            title="Respiratory Rate"
            value="18/min"
          />

          <MiniCard
            title="End-tidal CO2"
            value="36 mmHg"
          />

          <MiniCard
            title="Central Venous Pressure"
            value="8 mmHg"
          />

          <MiniCard
            title="Arterial Pressure"
            value="124 mmHg"
          />

          <MiniCard
            title="Intracranial Pressure"
            value="12 mmHg"
          />

        </div>

        {/* ECG + SURGERY */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        ">

          {/* ECG */}

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

                <HeartPulse className="text-green-400" />

                <h2 className="
                  text-2xl font-bold
                ">

                  Live ECG / EKG

                </h2>

              </div>

              <div className="
                text-green-400
                bg-green-500/20
                px-4 py-2
                rounded-xl
              ">

                ● LIVE

              </div>

            </div>

            <div className="h-[320px]">

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

          </div>

          {/* SURGERY PROGRESS */}

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

              <TimerReset className="text-cyan-400" />

              <h2 className="
                text-2xl font-bold
              ">

                Procedure Progress

              </h2>

            </div>

            <div className="h-[260px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <AreaChart data={surgeryProgress}>

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00ffff"
                    fill="#00ffff"
                  />

                </AreaChart>

              </ResponsiveContainer>

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

                Estimated Remaining Time

              </p>

              <h2 className="
                text-3xl font-bold
                text-cyan-400
                mt-2
              ">

                1h 42m

              </h2>

            </div>

          </div>

        </div>

        {/* ANESTHESIA + ALERTS */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        ">

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

              <Syringe className="text-purple-400" />

              <h2 className="
                text-2xl font-bold
              ">

                Anesthesia Monitoring

              </h2>

            </div>

            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            ">

              <MonitorBox
                title="Anesthesia Depth"
                value="Moderate"
              />

              <MonitorBox
                title="Sedation Level"
                value="72%"
              />

              <MonitorBox
                title="Drug Dosage"
                value="5.5 ml/h"
              />

              <MonitorBox
                title="Ventilator Status"
                value="Stable"
              />

            </div>

          </div>

          {/* ALERTS */}

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

                Emergency Alerts

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
                    flex justify-between items-center
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

                      {alert.status}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI PREDICTIVE */}

        <div className="
          mt-6
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        ">

          {/* AI RISK */}

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

              <Brain className="text-cyan-400" />

              <h2 className="
                text-2xl font-bold
              ">

                AI Predictive Risk

              </h2>

            </div>

    <div className="bg-[#081028] rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5 text-cyan-400">
        AI Assistant
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

          {/* AI OVERVIEW */}

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

              <ScanHeart className="text-green-400" />

              <h2 className="
                text-2xl font-bold
              ">

                AI Predictive Overview

              </h2>

            </div>

            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-5
            ">

              <OverviewCard
                title="ICU Need Probability"
                value="68%"
              />

              <OverviewCard
                title="Mortality Risk"
                value="8%"
              />

              <OverviewCard
                title="Complication Likelihood"
                value="12%"
              />

              <OverviewCard
                title="Duration Overrun"
                value="22%"
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

              AI predicts low mortality risk and
              manageable complication probability.
              Continuous ECG monitoring and optimized
              anesthesia dosage are recommended.
              Ventilator synchronization remains stable
              with no airway obstruction detected.

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

function VitalCard({
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

function MiniCard({
  title,
  value,
}) {

  return (

    <div className="
      bg-[#081028]
      rounded-2xl
      p-5
      text-white
    ">

      <p className="
        text-slate-400
        text-sm
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

function MonitorBox({
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
        text-xl font-bold
        text-cyan-400
        mt-3
      ">

        {value}

      </h3>

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
        text-green-400
        mt-3
      ">

        {value}

      </h3>

    </div>

  );
}