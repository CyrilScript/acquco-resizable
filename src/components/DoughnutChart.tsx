import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  // labels: ["Green", "Yellow", "Red"],
  datasets: [
    {
      label: "Chart data",
      data: [525, 100, 55],
      borderWidth: 0,
      backgroundColor: ["rgb(13,145,131)", "rgb(255,195,79)", "rgb(211,0,0)"],
      hoverOffset: 5,
      hoverBorderWidth: 15,
      hoverBorderJoinStyle: "miter",
      hoverBorderColor: "rgb(0,0,0,0)",
    },
  ],

  options: {
    cutout: "90%",
    responsive: true,
    plugins: {
      legend: {
        // position: "bottom",
        position: "right",
        display: false,
      },
    },
  },
};

interface WidthHeightChartProp {
  width: number;
  height: number;
}
export function DoughnutChart(props: WidthHeightChartProp) {
  return (
    <div className="relative overflow-scroll">
      <div className="relative h-full ml-12 sm:pt-8 2xl:mt-0  w-2/5 mr-auto pt-12">

      <div className="absolute h-5/6 flex w-full items-center justify-center">
        <div className="flex items-center">
          <h3 className="text-black text-3xl font-bold">92</h3>
          <sub className="text-base font-bold">%</sub>
        </div>
      </div>

      <Doughnut data={data} height={props.height} className="transform sm:scale-80 lg:scale-100" />

      </div>
   
      <div className="absolute top-24 right-10 z-20">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-green-500"></div>
          <div className="text-xs">Payment Successful</div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-yellow-500"></div>

          <div className="text-xs">Payment Declined</div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-red-500"></div>

          <div className="text-xs">Payment Error</div>
        </div>
      </div>
    </div>
  );
}
