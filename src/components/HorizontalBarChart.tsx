import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["N California", "London", "Paris", "Amsterdam", "Franfurt", "N Virginia"];

export const data = {
  labels,
  datasets: [
    {
      label: "DNS",
      data: [915, 740, 83, 632, 298, 762],
      backgroundColor: "rgb(247,132,123)",
    },
    {
      label: "TCP",
      data: [292, 211, 331, 334, 169, 940],
      backgroundColor: "rgb(242,150,225)",
    },
    {
      label: "TLS",
      data: [20, 449, 896, 169, 782, 190],
      backgroundColor: "rgb(98,132,247)",
    },
    {
      label: "First Byte",
      data: [292, 211, 331, 334, 169, 940],
      backgroundColor: "rgb(162,172,253)",
    },
    {
      label: "Wait",
      data: [20, 449, 896, 169, 782, 190],
      backgroundColor: "rgb(190,151,248)",
    },
  ],
};

export function HorizontalBarChart() {
  return (
    <div className="relative overflow-scroll h-full mt-0">
      <p className="absolute text-sm font-bold whitespace-nowrap left-0 pl-4 pb-1">Content Distribution Network Health</p>
      <Bar options={options} data={data} style={{ transform: "scale(0.9,0.5)", position: "absolute", marginTop: "-4.1rem" }} />
    </div>
  );
}
