import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import {
  Search,
  FileText,
  HeartPulse,
  ScanLine,
  Pill,
  Activity,
  Download,
  Eye,
} from "lucide-react";

export default function Reports() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const reports = [

    {
      id: 1,

      patient: {
        name: "John Michael Doe",
        age: 62,
        gender: "Male",
        blood: "O+",
        contact: "+91 9876543210",
        address: "Bangalore, India",
        image:
          "https://randomuser.me/api/portraits/men/75.jpg",
      },

      medicalHistory: [
        "Hypertension",
        "Type 2 Diabetes",
        "Previous Heart Surgery (2021)",
        "Penicillin Allergy",
      ],

      symptoms: [
        "Chest Pain",
        "Shortness of Breath",
        "Irregular Heartbeat",
      ],

      diagnosis:
        "Acute Coronary Syndrome detected with abnormal ECG patterns.",

      prescriptions: [
        "Aspirin 75mg",
        "Atorvastatin 20mg",
        "Metoprolol 50mg",
      ],

      labReports: [
        "Blood Test - Elevated Troponin",
        "Urine Test - Normal",
        "Blood Pressure - 150/95",
      ],

      scans: [
        "Chest X-Ray",
        "MRI Heart Scan",
        "CT Coronary Angiography",
      ],

      doctorNotes:
        "Patient responding well to treatment. Continue ICU monitoring for 48 hours.",

      discharge:
        "Not discharged yet. Under continuous observation.",

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

              Patient Medical Reports

            </h1>

            <p className="
              text-slate-400 mt-2
            ">

              AI-powered hospital records system

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
              placeholder="Search reports..."
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

        {/* REPORTS */}

        <div className="
          mt-6
          space-y-6
        ">

          {reports.map((report) => (

            <div
              key={report.id}
              className="
                bg-[#081028]
                rounded-3xl
                p-6
                text-white
              "
            >

              {/* TOP */}

              <div className="
                flex flex-col xl:flex-row
                gap-6
                justify-between
              ">

                <div className="
                  flex gap-5 items-center
                ">

                  <img
                    src={report.patient.image}
                    className="
                      w-28 h-28 rounded-full
                      border-4 border-cyan-400
                    "
                  />

                  <div>

                    <h2 className="
                      text-3xl font-bold
                    ">

                      {report.patient.name}

                    </h2>

                    <div className="
                      flex flex-wrap gap-4
                      mt-3 text-slate-300
                    ">

                      <p>
                        Age: {report.patient.age}
                      </p>

                      <p>
                        {report.patient.gender}
                      </p>

                      <p>
                        Blood: {report.patient.blood}
                      </p>

                    </div>

                    <p className="
                      mt-3 text-cyan-400
                    ">

                      {report.patient.contact}

                    </p>

                    <p className="
                      text-slate-400 mt-1
                    ">

                      {report.patient.address}

                    </p>

                  </div>

                </div>

                {/* BUTTONS */}

                <div className="
                  flex gap-4
                  h-fit
                ">

                  <button className="
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-black
                    px-5 py-3
                    rounded-2xl
                    font-bold
                    flex items-center gap-2
                  ">

                    <Eye size={18} />

                    View

                  </button>

                  <button className="
                    bg-green-500
                    hover:bg-green-400
                    text-black
                    px-5 py-3
                    rounded-2xl
                    font-bold
                    flex items-center gap-2
                  ">

                    <Download size={18} />

                    Export

                  </button>

                </div>

              </div>

              {/* GRID */}

              <div className="
                mt-6
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-6
              ">

                {/* LEFT */}

                <div className="space-y-6">

                  <ReportCard
                    title="Medical History"
                    icon={<HeartPulse className="text-red-400" />}
                    items={report.medicalHistory}
                  />

                  <ReportCard
                    title="Symptoms"
                    icon={<Activity className="text-yellow-400" />}
                    items={report.symptoms}
                  />

                  <ReportCard
                    title="Prescriptions"
                    icon={<Pill className="text-green-400" />}
                    items={report.prescriptions}
                  />

                </div>

                {/* RIGHT */}

                <div className="space-y-6">

                  <SingleCard
                    title="Diagnosis"
                    icon={<FileText className="text-cyan-400" />}
                    text={report.diagnosis}
                  />

                  <ReportCard
                    title="Lab Reports"
                    icon={<Activity className="text-purple-400" />}
                    items={report.labReports}
                  />

                  <ReportCard
                    title="Scans & Imaging"
                    icon={<ScanLine className="text-cyan-400" />}
                    items={report.scans}
                  />

                </div>

              </div>

              {/* NOTES */}

              <div className="
                mt-6
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-6
              ">

                <SingleCard
                  title="Doctor Notes"
                  icon={<FileText className="text-green-400" />}
                  text={report.doctorNotes}
                />

                <SingleCard
                  title="Discharge Summary"
                  icon={<FileText className="text-red-400" />}
                  text={report.discharge}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

function ReportCard({
  title,
  icon,
  items,
}) {

  return (

    <div className="
      bg-slate-900
      rounded-2xl
      p-5
    ">

      <div className="
        flex items-center gap-3
        mb-4
      ">

        {icon}

        <h3 className="
          text-xl font-bold
        ">

          {title}

        </h3>

      </div>

      <div className="space-y-3">

        {items.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#081028]
              rounded-xl
              p-3
              text-slate-300
            "
          >

            {item}

          </div>

        ))}

      </div>

    </div>

  );
}

function SingleCard({
  title,
  icon,
  text,
}) {

  return (

    <div className="
      bg-slate-900
      rounded-2xl
      p-5
    ">

      <div className="
        flex items-center gap-3
        mb-4
      ">

        {icon}

        <h3 className="
          text-xl font-bold text-white
        ">

          {title}

        </h3>

      </div>

      <p className="
        text-slate-300
        leading-relaxed
      ">

        {text}

      </p>

    </div>

  );
}