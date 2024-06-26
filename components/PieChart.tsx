import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

export default function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={120} height={120}>
        <Pie
          data={data01}
          nameKey="name"
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
