import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { WidthHeightChartProp } from "../interfaces";
import useWindowDimensions from "../hooks/useWindowDimesions";

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
        borderWidth: 2,
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
        borderWidth: 2,
      },
    ],
  },

  {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 50, 900, 400, 500, 300, 169],
        borderColor: "rgb(50,54,58)",
        backgroundColor: "rgba(50,54,58)",
        borderWidth: 2,
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
        borderWidth: 2,
      },
    ],
  },
];

export function LeftLineChart(props: WidthHeightChartProp) {
  const {width} = useWindowDimensions()
  return (
    <div className="relative  overflow-scroll  h-full">
      <h6 className="relative text-black top-0.5 left-4 font-medium">Application Incident Management (last 24 hours)</h6>
      <div className="absolute w-full">
        <div className="relative">
          <div className="absolute flex w-full top-3">
            <div className="flex flex-1 items-center justify-center w-full relative">
              <div>
                <div className="text-sm">Moderate</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">93</h3>
                  <sub className="text-red-500 pl-2 pt-2.5">&#8595; -71%</sub>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center w-full relative">
              <div>
                <div className="text-sm">High</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">7</h3>
                  <sub className="text-red-500 pl-2 pt-2.5">&#8595; -53%</sub>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center w-full relative">
              <div>
                <div className="text-sm">Critical</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">0</h3>
                  <sub className="text-red-500 pl-2 pt-2.5">&#8595; -1%</sub>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center w-full relative">
              <div>
                <div className="text-sm">Resolved</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">1,520</h3>
                  <sub className="text-green-500 pl-2 pt-2.5">&#8593; 281%</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "24%",
        }}
      >
        {groupData.map((data, i) => (
          <Line
            style={width>600?{
              transform: "scale(1,0.25)",
              marginTop: "1.5rem",
            }:{
              transform: "scale(1,0.25)",
              marginTop: "3.3rem",
            }}
            key={i}
            options={options}
            data={data}
            width={props.width / 4}
            height={props.height}
          />
        ))}
      </div>
    </div>
  );
}
