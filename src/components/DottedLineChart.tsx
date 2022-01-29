import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  pointRadius: 5,
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [603, 666, 673, 200],
      borderColor: "rgb(242,150,225)",
      backgroundColor: "rgb(242,150,225)",
    },
    {
      label: "Dataset 2",
      data: [100, 100, 200, 330],
      borderColor: "rgb(98,132,247)",
      backgroundColor: "rgb(98,132,247)",
    },
  ],
};

export function DottedLineChart() {
  return (
    <div className="relative overflow-scroll h-full mt-0">
      <p className="absolute text-sm text-black font-bold whitespace-nowrap left-0 pl-4 pb-1">Unique Visitors (by hour)</p>

      <Line
        options={options}
        data={data}
        style={{
          transform: "scale(0.9, 0.7)",
          marginTop: "0.5rem",
        }}
      />
    </div>
  );
}
