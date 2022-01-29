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

const data_01 = [
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
];
const data_02 = [
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
];

const data_03 = {
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
};

const data_04 = {
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
};

// export const groupData = [
//   {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [0, 0, 0, 0, 294, 637, 59],
//         borderColor: "rgb(50,54,58)",
//         backgroundColor: "rgba(50,54,58)",
//         borderWidth: 2,
//       },
//     ],
//   },

//   {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [187, 721, 949, 241, 158, 65, 648],
//         borderColor: "rgb(50,54,58)",
//         backgroundColor: "rgba(50,54,58)",
//         borderWidth: 2,
//       },
//     ],
//   },

//   {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [50, 50, 900, 400, 500, 300, 169],
//         borderColor: "rgb(50,54,58)",
//         backgroundColor: "rgba(50,54,58)",
//         borderWidth: 2,
//       },
//     ],
//   },

//   {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [50, 100, 200, 350, 300, 350, 300],
//         borderColor: "rgb(50,54,58)",
//         backgroundColor: "rgba(50,54,58)",
//         borderWidth: 2,
//       },
//     ],
//   },
// ];

interface WidthHeightChartProp {
  width: number;
  height: number;
}
export function RightLineChart(props: WidthHeightChartProp) {
  return (
    <div className="relative overflow-scroll h-full">
      <h6 className="relative text-black top-0.5 left-4 font-bold">Performance Metrics (last 24 hours)</h6>
      <div className="absolute w-full h-full">
        <div className="relative">
          <div className="absolute flex w-full top-3">
            <div className="flex flex-1 items-start justify-start w-full relative z-10">
              <div className="text-sm pl-6">Latency</div>
            </div>
            {/* <div className="flex flex-1 items-start justify-startw-full relative z-10">
              <div className="text-sm pl-12">Response Time</div>
            </div> */}
            {/* <div className="flex flex-1 items-center justify-center w-full relative z-10">
              <div>
                <div className="text-sm -ml-6">4xx Errors</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">93</h3>
                  <sub className="text-red-500 pl-2 pt-2.5">&#8595; -1%</sub>
                </div>
              </div>
            </div> */}
            {/* <div className="flex flex-1 items-center justify-center w-full relative z-10">
              <div>
                <div className="text-sm  -ml-6">5xx Errors</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">418</h3>
                  <sub className="text-green-500 pl-2 pt-2.5">&#8593; 418%</sub>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="relative top-2 flex flex-1 space-x-3 px-3 w-full h-full">
          <div className="bg-gray-300 bg-opacity-25 w-full h-3/4">
            <div className="pt-9 flex flex-1 text-xs space-x-1 px-3 w-full h-full">
              <div>
                <div className="font-bold">Web</div>
                <div className="pt-6 font-bold">Mobile</div>
              </div>
              <div className="-mt-1.5 pl-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">0</h3>
                  <sub className="text-xs pl-0.5 mt-1">ms</sub>
                </div>
                <div className="flex items-center pt-3">
                  <h3 className="font-bold text-lg">11</h3>
                  <p className="text-xs pl-0.5 mt-1">ms</p>
                </div>
              </div>
              <div className="relative flex-1">
                <div>
                  <Line
                    style={{
                      transform: "scale(1, 0.8)",
                      position: "absolute",
                      top: "0rem",
                      left: "0.15rem",
                      minWidth: "2rem !important",
                    }}
                    options={options}
                    data={data_03}
                    // width={props.width / 4}
                    // height={props.height}
                  />
                </div>
                <div className="pt-2">
                  <Line
                    style={{
                      transform: "scale(1, 0.8)",
                      position: "absolute",
                      top: "2.3rem",
                      left: "0.15rem",
                    }}
                    options={options}
                    data={data_03}
                    // width={props.width / 4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 bg-opacity-25 w-full h-3/4">
            <div className="text-sm pl-4">Response Time</div>
            <div className="pt-4 flex flex-1 text-xs space-x-1 px-3 w-full h-full">
              <div>
                <div className="font-bold">Web</div>
                <div className="pt-6 font-bold">Mobile</div>
              </div>
              <div className="-mt-1.5 pl-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">0</h3>
                  <sub className="text-xs pl-0.5 mt-1">ms</sub>
                </div>
                <div className="flex items-center pt-3">
                  <h3 className="font-bold text-lg">11</h3>
                  <p className="text-xs pl-0.5 mt-1">ms</p>
                </div>
              </div>
              <div className="relative flex-1">
                <div>
                  <Line
                    style={{
                      transform: "scale(1, 0.8)",
                      position: "absolute",
                      top: "0rem",
                      left: "0.15rem",
                      minWidth: "2rem !important",
                    }}
                    options={options}
                    data={data_03}
                    // width={props.width / 4}
                    // height={props.height}
                  />
                </div>
                <div className="pt-2">
                  <Line
                    style={{
                      transform: "scale(1, 0.8)",
                      position: "absolute",
                      top: "2.3rem",
                      left: "0.15rem",
                    }}
                    options={options}
                    data={data_03}
                    // width={props.width / 4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 bg-opacity-25 w-full h-3/4">
            <div className="flex flex-1 items-center justify-center w-full relative z-10">
              <div>
                <div className="text-sm -ml-6">4xx Errors</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">93</h3>
                  <sub className="text-red-500 pl-2 pt-2.5">&#8595; -1%</sub>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "-0.5rem",
              }}
            >
              <Line
                style={{
                  transform: "scale(1,0.25)",
                  // marginTop: "1rem",
                  position: "relative",
                  top: "-2.4rem",
                }}
                options={options}
                data={data_03}
                width={props.width / 4}
                height={props.height}
              />
            </div>
          </div>
          <div className="bg-gray-300 bg-opacity-25 w-full h-3/4">
            <div className="flex flex-1 items-center justify-center w-full relative z-10">
              <div>
                <div className="text-sm  -ml-6">5xx Errors</div>
                <div className="flex items-center">
                  <h3 className="text-3xl font-bold text-black">418</h3>
                  <sub className="text-green-500 pl-2 pt-2.5">&#8593; 418%</sub>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "-0.5rem",
              }}
            >
              <Line
                style={{
                  transform: "scale(1,0.25)",
                  // marginTop: "-1rem",
                  position: "relative",
                  top: "-2.4rem",
                }}
                options={options}
                data={data_04}
                width={props.width / 4}
                height={props.height}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
