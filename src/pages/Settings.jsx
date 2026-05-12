import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Settings as SettingsIcon,
  ShieldCheck,
  Bell,
  Brain,
  Users,
  Database,
  Server,
  RefreshCcw,
  Moon,
  Sun,
  Lock,
  Fingerprint,
  Smartphone,
  Wifi,
  Cpu,
  KeyRound,
  Save,
} from "lucide-react";

export default function Settings() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const [twoFactor, setTwoFactor] =
    useState(true);

  const [biometric, setBiometric] =
    useState(true);

  const [notifications, setNotifications] =
    useState(true);

  const [aiExplainability, setAiExplainability] =
    useState(true);

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

              System Settings

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              AI Surgical Assistance Configuration Panel

            </p>

          </div>

          <button className="
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            px-6 py-3
            rounded-2xl
            font-bold
            flex items-center gap-3
            h-fit
          ">

            <Save size={18} />

            Save Settings

          </button>

        </div>

        {/* GENERAL SETTINGS */}

        <SectionCard
          icon={<SettingsIcon className="text-cyan-400" />}
          title="General Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          ">

            <InputBox
              label="Hospital Name"
              value="Jain University"
            />

            <InputBox
              label="Time Zone"
              value="Asia/Kolkata"
            />

            <InputBox
              label="Place"
              value="Whitefield"
            />

            <div className="
              bg-slate-900
              rounded-2xl
              p-5
            ">

              <p className="
                text-slate-400 mb-4
              ">

                Theme Mode

              </p>

              <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className="
                  w-full
                  bg-[#081028]
                  rounded-xl
                  p-4
                  flex items-center
                  justify-between
                "
              >

                <span className="text-white">

                  {darkMode
                    ? "Dark Mode"
                    : "Light Mode"}

                </span>

                {darkMode ? (
                  <Moon className="
                    text-cyan-400
                  " />
                ) : (
                  <Sun className="
                    text-yellow-400
                  " />
                )}

              </button>

            </div>

          </div>

        </SectionCard>

        {/* USER MANAGEMENT */}

        <SectionCard
          icon={<Users className="text-green-400" />}
          title="User Management Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">

            <InputBox
              label="User Role"
              value="Senior Surgeon"
            />

            <InputBox
              label="Permissions"
              value="Full Access"
            />

            <InputBox
              label="Features"
              value="AI + Monitoring + Analytics"
            />

          </div>

        </SectionCard>

        {/* SECURITY */}

        <SectionCard
          icon={<ShieldCheck className="text-red-400" />}
          title="Authentication & Security"
        >

          <div className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
          ">

            {/* LOGIN */}

            <div className="
              bg-slate-900
              rounded-2xl
              p-5
            ">

              <div className="
                flex items-center gap-3
                mb-5
              ">

                <Lock className="
                  text-red-400
                " />

                <h3 className="
                  text-xl font-bold text-white
                ">

                  Login Security

                </h3>

              </div>

              <ToggleItem
                title="Two-factor Authentication"
                enabled={twoFactor}
                setEnabled={setTwoFactor}
              />

              <ToggleItem
                title="Biometric Login"
                enabled={biometric}
                setEnabled={setBiometric}
              />

              <InputBox
                label="Password Policy"
                value="Strong Password Required"
              />

              <InputBox
                label="Session Timeout"
                value="15 Minutes"
              />

            </div>

            {/* ACCESS */}

            <div className="
              bg-slate-900
              rounded-2xl
              p-5
            ">

              <div className="
                flex items-center gap-3
                mb-5
              ">

                <KeyRound className="
                  text-cyan-400
                " />

                <h3 className="
                  text-xl font-bold text-white
                ">

                  Access Control

                </h3>

              </div>

              <InputBox
                label="Role-based Access"
                value="Enabled"
              />

              <InputBox
                label="IP Restrictions"
                value="Hospital Network Only"
              />

              <InputBox
                label="Device Authorization"
                value="Authorized Devices"
              />

              <InputBox
                label="Audit Logs"
                value="Enabled"
              />

            </div>

          </div>

        </SectionCard>

        {/* NOTIFICATIONS */}

        <SectionCard
          icon={<Bell className="text-yellow-400" />}
          title="Notification Settings"
        >

          <div className="
            bg-slate-900
            rounded-2xl
            p-5
          ">

            <ToggleItem
              title="Emergency Notifications"
              enabled={notifications}
              setEnabled={setNotifications}
            />

            <InputBox
              label="Failed Login Alerts"
              value="Enabled"
            />

            <InputBox
              label="Suspicious Activity Detection"
              value="AI Active Monitoring"
            />

          </div>

        </SectionCard>

        {/* AI */}

        <SectionCard
          icon={<Brain className="text-purple-400" />}
          title="AI Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          ">

            <InputBox
              label="AI Configuration"
              value="Advanced Surgical AI"
            />

            <InputBox
              label="AI Modules"
              value="Prediction + Monitoring"
            />

            <InputBox
              label="AI Explainability"
              value="Enabled"
            />

            <InputBox
              label="AI Confidence"
              value="96%"
            />

          </div>

          <div className="mt-5">

            <ToggleItem
              title="Enable AI Explainability"
              enabled={aiExplainability}
              setEnabled={setAiExplainability}
            />

          </div>

        </SectionCard>

        {/* COMMUNICATION */}

        <SectionCard
          icon={<Smartphone className="text-green-400" />}
          title="Communication Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">

            <InputBox
              label="Voice Communication"
              value="Enabled"
            />

            <InputBox
              label="Video Consultation"
              value="Enabled"
            />

            <InputBox
              label="Emergency Broadcast"
              value="Priority Enabled"
            />

          </div>

        </SectionCard>

        {/* API */}

        <SectionCard
          icon={<Database className="text-cyan-400" />}
          title="API & Integration Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">

            <InputBox
              label="FHIR API"
              value="Connected"
            />

            <InputBox
              label="Hospital Database"
              value="MongoDB Cluster"
            />

            <InputBox
              label="Cloud Sync"
              value="Active"
            />

          </div>

        </SectionCard>

        {/* BACKUP */}

        <SectionCard
          icon={<RefreshCcw className="text-orange-400" />}
          title="Backup & Recovery Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">

            <InputBox
              label="Auto Backup"
              value="Every 30 Minutes"
            />

            <InputBox
              label="Disaster Recovery"
              value="Enabled"
            />

            <InputBox
              label="Cloud Recovery"
              value="AI Protected"
            />

          </div>

        </SectionCard>

        {/* SYSTEM */}

        <SectionCard
          icon={<Server className="text-red-400" />}
          title="Developer & System Settings"
        >

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          ">

            <InputBox
              label="Server Status"
              value="Operational"
            />

            <InputBox
              label="CPU Usage"
              value="42%"
            />

            <InputBox
              label="Network Monitoring"
              value="Stable"
            />

            <InputBox
              label="Device Sync"
              value="Connected"
            />

          </div>

          <div className="
            mt-6
            bg-slate-900
            rounded-2xl
            p-5
            text-slate-300
            leading-relaxed
          ">

            System monitoring indicates stable
            operation across all AI surgical modules.
            Security systems, monitoring devices,
            and hospital infrastructure are currently
            functioning normally with active
            predictive AI analysis enabled.

          </div>

        </SectionCard>

      </div>

    </div>

  );
}

/* SECTION */

function SectionCard({
  icon,
  title,
  children,
}) {

  return (

    <div className="
      mt-6
      bg-[#081028]
      rounded-3xl
      p-6
    ">

      <div className="
        flex items-center gap-3
        mb-6
      ">

        {icon}

        <h2 className="
          text-2xl font-bold text-white
        ">

          {title}

        </h2>

      </div>

      {children}

    </div>

  );
}

/* INPUT */

function InputBox({
  label,
  value,
}) {

  return (

    <div className="
      bg-slate-900
      rounded-2xl
      p-5
    ">

      <p className="
        text-slate-400 mb-3
      ">

        {label}

      </p>

      <input
        defaultValue={value}
        className="
          w-full
          bg-[#081028]
          rounded-xl
          px-4 py-3
          outline-none
          text-white
        "
      />

    </div>

  );
}

/* TOGGLE */

function ToggleItem({
  title,
  enabled,
  setEnabled,
}) {

  return (

    <div className="
      flex items-center justify-between
      bg-[#081028]
      rounded-2xl
      p-4
      mb-4
    ">

      <p className="text-white">

        {title}

      </p>

      <button
        onClick={() =>
          setEnabled(!enabled)
        }
        className={`
          w-14 h-7 rounded-full
          transition relative

          ${
            enabled
              ? "bg-green-500"
              : "bg-slate-600"
          }
        `}
      >

        <div className={`
          absolute top-1
          w-5 h-5 rounded-full
          bg-white transition

          ${
            enabled
              ? "right-1"
              : "left-1"
          }
        `} />

      </button>

    </div>

  );
}