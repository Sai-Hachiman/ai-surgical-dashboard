import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  AlertTriangle,
  HeartPulse,
  Brain,
  Droplets,
  ShieldAlert,
  Activity,
  WifiOff,
  ServerCrash,
  Clock3,
  Phone,
  Video,
  Mic,
  Send,
  Monitor,
  Sparkles,
} from "lucide-react";

export default function Alerts() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [message, setMessage] = useState("");

  // ALERTS

  const emergencyAlerts = [

    {
      type: "Cardiac Alert",
      patient: "John Michael Doe",
      status: "CRITICAL",
      message:
        "Irregular heartbeat detected. Immediate intervention required.",
      time: "09:42 PM",
      date: "12 May 2026",
      color: "red",
    },

    {
      type: "Oxygen Alert",
      patient: "Emma Watson",
      status: "WARNING",
      message:
        "Oxygen saturation dropped below safe threshold.",
      time: "09:35 PM",
      date: "12 May 2026",
      color: "yellow",
    },

    {
      type: "Bleeding Alert",
      patient: "Michael Lee",
      status: "CRITICAL",
      message:
        "Massive blood loss prediction detected by AI system.",
      time: "09:28 PM",
      date: "12 May 2026",
      color: "red",
    },

  ];

  const highLevelAlerts = [

    {
      title: "Patient Instability",
      detail:
        "Blood pressure fluctuations detected during surgery.",
    },

    {
      title: "Workflow Delay",
      detail:
        "Surgery duration likely to exceed estimated time.",
    },

    {
      title: "AI Prediction Warning",
      detail:
        "High ICU probability after operation.",
    },

  ];

  const systemAlerts = [

    {
      title: "Sensor Failure",
      icon: <Activity />,
    },

    {
      title: "Network Failure",
      icon: <WifiOff />,
    },

    {
      title: "Server Monitoring Delay",
      icon: <ServerCrash />,
    },

  ];

  const chatMessages = [

    {
      sender: "Dr. Sarah Wilson",
      role: "Senior Cardiologist",
      text:
        "Increase oxygen delivery and continue ECG observation.",
      type: "doctor",
    },

    {
      sender: "AI Assistant",
      role: "AI Monitoring",
      text:
        "Possible cardiac instability predicted within 10 minutes.",
      type: "ai",
    },

    {
      sender: "Dr. James Cooper",
      role: "Neurosurgeon",
      text:
        "Requesting emergency neuro consultation immediately.",
      type: "doctor",
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
          flex flex-col xl:flex-row
          gap-6
        ">

          {/* LEFT */}

          <div className="flex-1">

            <div className="
              flex flex-col lg:flex-row
              justify-between
              gap-5
            ">

              <div>

                <h1 className="
                  text-3xl font-bold text-white
                ">

                  Emergency Alert Center

                </h1>

                <p className="
                  text-slate-400 mt-2
                ">

                  AI-powered surgical alert system

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

                ● LIVE EMERGENCY TRACKING

              </div>

            </div>

            {/* STATUS */}

            <div className="
              mt-6
              bg-[#081028]
              rounded-3xl
              p-6
              text-white
            ">

              <div className="
                flex items-center justify-between
              ">

                <div className="
                  flex items-center gap-4
                ">

                  <ShieldAlert className="
                    text-green-400
                  " />

                  <div>

                    <h2 className="
                      text-2xl font-bold
                    ">

                      Patient Stability Status

                    </h2>

                    <p className="
                      text-slate-400 mt-1
                    ">

                      Current surgical environment

                    </p>

                  </div>

                </div>

                <div className="
                  bg-yellow-500/20
                  text-yellow-400
                  px-5 py-3
                  rounded-2xl
                  font-bold
                ">

                  WARNING STATE

                </div>

              </div>

            </div>

            {/* EMERGENCY ALERTS */}

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

                <AlertTriangle className="
                  text-red-400
                " />

                <h2 className="
                  text-2xl font-bold
                ">

                  Emergency Alerts

                </h2>

              </div>

              <div className="space-y-5">

                {emergencyAlerts.map((alert, index) => (

                  <details
                    key={index}
                    className={`
                      rounded-2xl
                      overflow-hidden
                      border

                      ${
                        alert.color === "red"
                          ? "border-red-500 bg-red-500/10"
                          : "border-yellow-500 bg-yellow-500/10"
                      }
                    `}
                  >

                    <summary className="
                      cursor-pointer
                      list-none
                      p-5
                    ">

                      <div className="
                        flex flex-col lg:flex-row
                        justify-between
                        gap-4
                      ">

                        <div>

                          <div className="
                            flex items-center gap-3
                          ">

                            {alert.type === "Cardiac Alert" && (
                              <HeartPulse className="
                                text-red-400
                              " />
                            )}

                            {alert.type === "Oxygen Alert" && (
                              <Activity className="
                                text-yellow-400
                              " />
                            )}

                            {alert.type === "Bleeding Alert" && (
                              <Droplets className="
                                text-red-400
                              " />
                            )}

                            <h3 className="
                              text-xl font-bold
                            ">

                              {alert.type}

                            </h3>

                          </div>

                          <p className="
                            text-slate-300 mt-2
                          ">

                            Patient: {alert.patient}

                          </p>

                        </div>

                        <div className="
                          flex flex-col items-end
                        ">

                          <span className={`
                            px-4 py-2 rounded-xl text-sm font-bold

                            ${
                              alert.color === "red"
                                ? "bg-red-500 text-white"
                                : "bg-yellow-500 text-black"
                            }
                          `}>

                            {alert.status}

                          </span>

                          <p className="
                            text-slate-400 mt-3 text-sm
                          ">

                            {alert.time}

                          </p>

                          <p className="
                            text-slate-500 text-sm
                          ">

                            {alert.date}

                          </p>

                        </div>

                      </div>

                    </summary>

                    <div className="
                      px-5 pb-5
                      text-slate-300
                    ">

                      {alert.message}

                    </div>

                  </details>

                ))}

              </div>

            </div>

            {/* WARNING + SYSTEM */}

            <div className="
              mt-6
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-6
            ">

              {/* HIGH LEVEL */}

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

                  <Brain className="
                    text-cyan-400
                  " />

                  <h2 className="
                    text-2xl font-bold
                  ">

                    AI Warning Alerts

                  </h2>

                </div>

                <div className="space-y-4">

                  {highLevelAlerts.map((item, index) => (

                    <div
                      key={index}
                      className="
                        bg-slate-900
                        rounded-2xl
                        p-5
                      "
                    >

                      <h3 className="
                        text-lg font-bold
                        text-yellow-400
                      ">

                        {item.title}

                      </h3>

                      <p className="
                        text-slate-300 mt-3
                      ">

                        {item.detail}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* SYSTEM */}

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

                  <ServerCrash className="
                    text-red-400
                  " />

                  <h2 className="
                    text-2xl font-bold
                  ">

                    System & Device Alerts

                  </h2>

                </div>

                <div className="space-y-4">

                  {systemAlerts.map((item, index) => (

                    <div
                      key={index}
                      className="
                        bg-slate-900
                        rounded-2xl
                        p-5
                        flex items-center gap-4
                      "
                    >

                      <div className="
                        text-red-400
                      ">

                        {item.icon}

                      </div>

                      <div>

                        <h3 className="
                          text-lg font-bold
                        ">

                          {item.title}

                        </h3>

                        <p className="
                          text-slate-400 mt-1
                        ">

                          Monitoring required

                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CHAT */}

          <div className="
            w-full xl:w-[380px]
            bg-[#081028]
            rounded-3xl
            p-6
            text-white
            flex flex-col
          ">

            {/* CHAT HEADER */}

            <div className="
              flex justify-between items-center
            ">

              <div>

                <h2 className="
                  text-2xl font-bold
                ">

                  Senior Doctor Chat

                </h2>

                <p className="
                  text-slate-400 mt-1
                ">

                  Live surgical communication

                </p>

              </div>

              <div className="
                bg-green-500/20
                text-green-400
                px-4 py-2
                rounded-xl
              ">

                ● ONLINE

              </div>

            </div>

            {/* ACTIONS */}

            <div className="
              mt-6
              grid grid-cols-3 gap-4
            ">

              <button className="
                bg-slate-900
                hover:bg-slate-800
                rounded-2xl
                p-4
                flex flex-col
                items-center gap-2
              ">

                <Phone className="
                  text-cyan-400
                " />

                <span className="text-sm">
                  Voice
                </span>

              </button>

              <button className="
                bg-slate-900
                hover:bg-slate-800
                rounded-2xl
                p-4
                flex flex-col
                items-center gap-2
              ">

                <Video className="
                  text-green-400
                " />

                <span className="text-sm">
                  Video
                </span>

              </button>

              <button className="
                bg-slate-900
                hover:bg-slate-800
                rounded-2xl
                p-4
                flex flex-col
                items-center gap-2
              ">

                <Monitor className="
                  text-purple-400
                " />

                <span className="text-sm">
                  Share
                </span>

              </button>

            </div>

            {/* CHAT */}

            <div className="
              mt-6
              flex-1
              overflow-y-auto
              space-y-4
            ">

              {chatMessages.map((chat, index) => (

                <div
                  key={index}
                  className={`
                    rounded-2xl
                    p-4

                    ${
                      chat.type === "ai"
                        ? "bg-cyan-500/10 border border-cyan-500"
                        : "bg-slate-900"
                    }
                  `}
                >

                  <div className="
                    flex items-center gap-2
                  ">

                    {chat.type === "ai" ? (
                      <Sparkles className="
                        text-cyan-400
                      " />
                    ) : (
                      <Mic className="
                        text-green-400
                      " />
                    )}

                    <h3 className="
                      font-bold
                    ">

                      {chat.sender}

                    </h3>

                  </div>

                  <p className="
                    text-xs text-slate-400 mt-1
                  ">

                    {chat.role}

                  </p>

                  <p className="
                    text-slate-300 mt-3
                  ">

                    {chat.text}

                  </p>

                </div>

              ))}

            </div>

            {/* INPUT */}

            <div className="
              mt-5
              flex gap-3
            ">

              <input
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Type emergency message..."
                className="
                  flex-1
                  bg-slate-900
                  rounded-2xl
                  px-4 py-4
                  outline-none
                  text-white
                "
              />

              <button className="
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                rounded-2xl
                px-5
                flex items-center justify-center
              ">

                <Send size={20} />

              </button>

            </div>

            {/* QUICK ACTION */}

            <button className="
              mt-5
              bg-red-500
              hover:bg-red-400
              rounded-2xl
              py-4
              font-bold
              flex items-center
              justify-center gap-3
            ">

              <Clock3 />

              Emergency Request

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}