import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { DoughnutChart } from "./DoughnutChart";
import { LeftLineChart } from "./LeftLineChart";
import { StackedBarChart } from "./StackedBarChart";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { DottedLineChart } from "./DottedLineChart";
import { RightLineChart } from "./RightLineChart";
import ProgressChart from "./ProgressChart";
import DataTable from "./DataTable";

const ReactGridLayout = require("react-grid-layout");
const { Responsive, WidthProvider } = ReactGridLayout;
const ResponsiveReactGridLayout = WidthProvider(Responsive);

type initialLayoutType = { x: number; y: number; w: number; h: number; i: string }[];
type ShowcaseLayoutProps = {
  onLayoutChange: any;
  cols?: any;
  props?: {
    onLayoutChange: (a: any, b: any) => {};
    onBreakpointChange: (a: any) => {};
    className: "layout";
    rowHeight: 30;
    cols: { lg: number; md: number; sm: number; xs: number; xxs: number };
    initialLayout: initialLayoutType;
  };
};
type ShowcaseLayoutState = {
  currentBreakpoint: string;
  compactType: any;
  layouts?: any;
  mounted: boolean;
};

export default class ShowcaseLayout extends React.Component<ShowcaseLayoutProps, ShowcaseLayoutState> {
  static propTypes: { onLayoutChange: PropTypes.Validator<(...args: any[]) => any> };
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
      layouts: { lg: props.initialLayout, static: "" },
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function (l: any, i: number) {
      const width = l.w * 100;
      const height = l.h * 35;

      switch (l.i) {
        case "0":
          return (
            <div key={i} className="text ">
              <LeftLineChart width={width} height={height} key={i} />
            </div>
          );
        case "1":
          return (
            <div key={i} className="text ">
              <DottedLineChart />
            </div>
          );
        case "2":
          return (
            <div key={i} className="text ">
              <ProgressChart />
            </div>
          );
        case "3":
          return (
            <div key={i} className="text ">
              <DataTable />
            </div>
          );
        case "4":
          return (
            <div key={i} className="text ">
              <RightLineChart width={width} height={height}  />
            </div>
          );
        case "5":
          return (
            <div key={i} className="text ">
              <HorizontalBarChart />
            </div>
          );
        case "6":
          return (
            <div key={i} className="text ">
              <StackedBarChart />
            </div>
          );
        case "7":
          return (
            <div key={i} className="text ">
              <DoughnutChart width={300} height={300} />
            </div>
          );
        default:
          return (
            <div key={i} className="text ">
              <ProgressChart />
            </div>
          );
      }
    });
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
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: [
    { x: 0, y: 0, w: 6, h: 4, i: "0" },
    { x: 0, y: 4, w: 3, h: 4, i: "1" },
    { x: 3, y: 4, w: 3, h: 4, i: "2" },
    { x: 6, y: 4, w: 6, h: 9, i: "3" },
    { x: 6, y: 0, w: 6, h: 4, i: "4" },
    { x: 0, y: 8, w: 6, h: 5, i: "5" },
    { x: 0, y: 13, w: 8, h: 6, i: "6" },
    { x: 8, y: 13, w: 4, h: 6, i: "7" },
  ],
};
