export default function PatientPanel() {

  return (
    <div className="bg-[#081028] rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5 text-emerald-400">
        Patient Database
      </h2>

      <div className="space-y-4 text-slate-300">

        <p>Name: John Doe</p>

        <p>Age: 45</p>

        <p>Blood Group: O+</p>

        <p>Allergies: Penicillin</p>

        <p>Previous Surgery: Cardiac Surgery</p>

        <p>MRI Scan Uploaded</p>

      </div>

      <div className="mt-6 rounded-2xl overflow-hidden border border-slate-800">

        <img
          src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop"
          alt="MRI"
          className="w-full h-[220px] object-cover"
        />

      </div>

    </div>
  );
}