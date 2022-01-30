import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import useWindowDimensions from "../hooks/useWindowDimesions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      position: "right" as const,
      display: true,
    },
  },
  responsive: true,

  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      //   ticks: {
      //     display: false,
      //   },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      //   ticks: {
      //     display: false,
      //   },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "User",
      data: [416, 587, 189, 828, 768, 336, 677],
      backgroundColor: "rgb(233,92,121)",
    },
    {
      label: "System",
      data: [864, 337, 403, 911, 928, 646, 287],
      backgroundColor: "rgb(255,195,79)",
    },
    {
      label: "Idle",
      data: [194, 924, 72, 489, 937, 408, 14],
      backgroundColor: "rgb(247,147,63)",
    },
  ],
};

export function StackedBarChart() {
  const {width} = useWindowDimensions();
  return (
    <div className="relative overflow-scroll h-full mt-0">
      <div className="absolute bg-white text-sm text-black z-10 font-bold whitespace-nowrap left-0 px-4 pb-4">eCommerce Infrastructure CPU usage</div>

      <Bar options={options} data={data} style={width> 640?{ transform: "scale(0.9,0.45)", position: "absolute", marginTop: "-7rem" }:{ transform: "scale(0.9,0.45)", position: "absolute" }} />
    </div>
  );
}
