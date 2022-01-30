import { makeAutoObservable } from "mobx";
import { initialLayoutType } from "./types";

// Standard interface and functions
export const layoutTypes = ["left-line", "dotted-line", "progress", "table", "right-line", "horizontal-bar", "stacked-bar", "doughnut"];

const removeChart = (charts: initialLayoutType, i: string) => charts.filter((chart) => chart.i !== i);

const addChart = (charts: initialLayoutType, type: string, xAxis: number, width: number, height: number) => [
  ...charts,
  {
    x: xAxis, //0-8
    y: Math.max(0, Math.max(...charts.map(({ y }) => y))) + 5,
    w: width, //3-10
    h: height, //4-10
    i: charts.length.toString(),
    type: type,
  },
];

// MobX implementation
class Charts {
  charts: initialLayoutType = [
    { x: 0, y: 0, w: 6, h: 4, i: "0", type: "left-line" },
    { x: 0, y: 4, w: 3, h: 4, i: "1", type: "dotted-line" },
    { x: 3, y: 4, w: 3, h: 4, i: "2", type: "progress" },
    { x: 6, y: 4, w: 6, h: 9, i: "3", type: "table" },
    { x: 6, y: 0, w: 6, h: 4, i: "4", type: "right-line" },
    { x: 0, y: 8, w: 6, h: 5, i: "5", type: "horizontal-bar" },
    { x: 0, y: 13, w: 8, h: 6, i: "6", type: "stacked-bar" },
    { x: 8, y: 13, w: 4, h: 6, i: "7", type: "doughnut" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  removeChart(i: string) {
    this.charts = removeChart(this.charts, i);
  }

  addChart(type: string, xAxis: number, width: number, height: number) {
    this.charts = addChart(this.charts, type, xAxis, width, height);
  }
}

const store = new Charts();

export default store;
