import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
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
  pointRadius: 0,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const groupData = [
  {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [0, 0, 0, 0, 294, 637, 59],
        borderColor: "rgb(50,54,58)",
        backgroundColor: "rgba(50,54,58)",
      },
    ],
  },

  {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [187, 721, 949, 241, 158, 65, 648],
        borderColor: "rgb(50,54,58)",
        backgroundColor: "rgba(50,54,58)",
      },
    ],
  },

  {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [943, 389, 385, 603, 360, 523, 169],
        borderColor: "rgb(50,54,58)",
        backgroundColor: "rgba(50,54,58)",
      },
    ],
  },

  {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 100, 200, 350, 300, 350, 300],
        borderColor: "rgb(50,54,58)",
        backgroundColor: "rgba(50,54,58)",
      },
    ],
  },
];


interface WidthHeightChartProp {
  width: number;
  height: number;
}
export function LeftLineChart(props: WidthHeightChartProp) {
  return (
    <div
      style={{
        display: "flex",
        width: "24%",
      }}
    >
      {groupData.map((data, i) => (
        <Line
          style={{
            transform: "scale(0.5)",
            marginTop: "2.3rem",
          }}
          key={i}
          options={options}
          data={data}
          width={props.width / 4}
          height={props.height}
        />
      ))}
    </div>
  );
}
