export default function AIAssistant() {

  return (
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
  );
}