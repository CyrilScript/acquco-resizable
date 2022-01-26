import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

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
      label: "Dataset 1",
      data: [416, 587, 189, 828, 768, 336, 677],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [864, 337, 403, 911, 928, 646, 287],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: [194, 924, 72, 489, 937, 408, 14],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export function StackedBarChart() {
  return (
    <div style={{ position: "relative", marginTop: "0" }}>
      <Bar options={options} data={data} style={{ transform: "scale(0.9,0.45)", position: "absolute", marginTop: "-7rem" }} />
    </div>
  );
}
