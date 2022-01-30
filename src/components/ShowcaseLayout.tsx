import React, { Component } from "react";
import { DoughnutChart } from "./DoughnutChart";
import { LeftLineChart } from "./LeftLineChart";
import { StackedBarChart } from "./StackedBarChart";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { DottedLineChart } from "./DottedLineChart";
import { RightLineChart } from "./RightLineChart";
import ProgressChart from "./ProgressChart";
import DataTable from "./DataTable";
import { observer } from "mobx-react";
import store from "../store";
import * as mobx from "mobx";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { Responsive, WidthProvider } from "react-grid-layout";
import { initialLayoutType, ShowcaseLayoutProps, ShowcaseLayoutState } from "../types";

const ResponsiveReactGridLayout = WidthProvider(Responsive);



class ShowcaseLayout extends Component<ShowcaseLayoutProps, ShowcaseLayoutState> {
  static defaultProps: {
    className: string;
    rowHeight: number;
    onLayoutChange: () => void;
    cols: { lg: number; md: number; sm: number; xs: number; xxs: number };
    initialLayout: initialLayoutType;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: mobx.toJS(store.charts), static: "" },
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      layouts: { ...this.state.layouts, lg: mobx.toJS(store.charts) },
      mounted: true,
    });
  }


  handleDelete(id: number) {
    store.removeChart(id.toString());

    this.setState({
      ...this.state,
      layouts: { ...this.state.layouts, lg: mobx.toJS(store.charts) },
      mounted: true,
    });
  }

  generateDOM() {

    return mobx.toJS(store.charts).map((l: any, i: number) => {
      const width = l.w * 100;
      const height = l.h * 35;

      switch (l.type) {
        case "left-line":
          return (
            <div key={i} className="text">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <LeftLineChart width={width} height={height} />
            </div>
          );
        case "dotted-line":
          return (
            <div key={i} className="text ">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <DottedLineChart />
            </div>
          );
        case "progress":
          return (
            <div key={i} className="text ">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <ProgressChart />
            </div>
          );
        case "table":
          return (
            <div key={i} className="text ">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <DataTable />
            </div>
          );
        case "right-line":
          return (
            <div key={i} className="text ">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <RightLineChart width={width} height={height} />
            </div>
          );
        case "horizontal-bar":
          return (
            <div key={i} className="text ">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <HorizontalBarChart />
            </div>
          );
        case "stacked-bar":
          return (
            <div key={i} className="text ">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <StackedBarChart />
            </div>
          );
        case "doughnut":
          return (
            <div key={i} className="text overflow-scroll">
              <p className="absolute font-medium text-black whitespace-nowrap left-0 pl-4 pt-2">Payment Health (last 24hours) </p>
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <DoughnutChart width={300} height={300} />
            </div>
          );
        default:
          return (
            <div key={i} className="text">
              <IconButton
                className="float-right top-0 z-20 transform scale-75"
                style={{ position: "absolute", right: 0, backgroundColor: "white" }}
                onClick={() => this.handleDelete(l.i)}
              >
                <DeleteIcon className="scale-110" />
              </IconButton>
              <ProgressChart />
            </div>
          );
      }
    })

  }

  onBreakpointChange(breakpoint: any) {
    this.setState({
      currentBreakpoint: breakpoint,
    });
  }

  onLayoutChange(layout: any, layouts: any) {
    this.props.onLayoutChange(layout, layouts);
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          // onBreakpointChange={this.onBreakpointChange}
          // onLayoutChange={this.onLayoutChange}
          // measureBeforeMount={false}
          // // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // // and set `measureBeforeMount={true}`.
          // useCSSTransforms={this.state.mounted}
          // compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: mobx.toJS(store.charts),
};

export default observer(ShowcaseLayout);
