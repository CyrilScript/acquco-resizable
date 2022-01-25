import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
// import { Responsive, WidthProvider } from "react-grid-layout";
// const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ReactGridLayout = require('react-grid-layout');
const  { Responsive, WidthProvider } = ReactGridLayout;

const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const  { Responsive, WidthProvider } = ReactGridLayout;
type ShowcaseLayoutProps = {
  onLayoutChange: any;
  cols?: any;
  props?: {
    onLayoutChange: (a: any, b: any) => {};
    // onLayoutChange: any;
    onBreakpointChange: (a: any) => {};
    className: "layout";
    rowHeight: 30;
    cols: { lg: number; md: number; sm: number; xs: number; xxs: number };
    // cols:any;
    initialLayout: () => { x: number; y: number; w: number; h: number; i: string; static: boolean }[];
  };
};
type ShowcaseLayoutState = {
  currentBreakpoint: string;
  compactType: any;
  // layouts?: { lg?: { l: any }; static?: string };
  // layouts?: ReactGridLayout.Layouts | undefined;
  layouts?:any;
  mounted: boolean;
};

export default class ShowcaseLayout extends React.Component<ShowcaseLayoutProps, ShowcaseLayoutState> {
  static propTypes: { onLayoutChange: PropTypes.Validator<(...args: any[]) => any>; };
  static defaultProps: { className: string; rowHeight: number; onLayoutChange: () => void; cols: { lg: number; md: number; sm: number; xs: number; xxs: number; }; initialLayout: { x: number; y: number; w: number; h: number; i: string; static: boolean; }[]; };
  constructor(props: any) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.initialLayout, static: "" },
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function (l:any, i:number) {
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span className="text" title="This item is static and cannot be removed or resized.">
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  }

  onBreakpointChange(breakpoint: any) {
    this.setState({
      currentBreakpoint: breakpoint,
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType = oldCompactType === "horizontal" ? "vertical" : oldCompactType === "vertical" ? null : "horizontal";
    this.setState({ compactType });
  }

  onLayoutChange(layout: any, layouts: any) {
    this.props.onLayoutChange(layout, layouts);
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() },
    });
  }

  render() {
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} ({this.props.cols[this.state.currentBreakpoint]} columns)
        </div>
        <div>Compaction type: {_.capitalize(this.state.compactType) || "No Compaction"}</div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>Change Compaction Type</button>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
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
  initialLayout: generateLayout(),
};

function generateLayout() {
  return _.map(_.range(0, 25), function (item:any, i:number) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
}