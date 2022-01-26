import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  datasets: [
    {
      label: "Chart data",
      data: [525, 215],
      borderWidth: 0,
      backgroundColor: ["rgb(13,145,131)", "rgb(211,0,0)"],
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
        position: "right" as const,
        display: true,
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
    <div
      style={{
        width: "40%",
        margin: "auto",
        marginTop: "1.5rem",
      }}
    >
      <Doughnut data={data} height={props.height} />
    </div>
  );
}
