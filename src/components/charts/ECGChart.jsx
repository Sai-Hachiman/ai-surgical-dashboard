import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function ECGChart({ data = [] }) {

  const chartData = data.map((item, index) => ({
    index,
    value: item,
  }));

  return (

    <ResponsiveContainer width="100%" height={300}>

      <LineChart data={chartData}>

        <Line
          type="monotone"
          dataKey="value"
          stroke="#00ff99"
          strokeWidth={3}
          dot={false}
        />

      </LineChart>

    </ResponsiveContainer>

  );
}