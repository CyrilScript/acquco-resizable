import React from "react";
import ReactDOM from "react-dom";
import ShowcaseLayout from "./ShowcaseLayout";

type LayoutProps = {
  props: any;
};
type LayoutState = {
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
    static: boolean;
  }[];
};

class ExampleLayout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: any) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout: []) {
    this.setState({ layout: layout });
  }

  stringifyLayout() {
    return this.state.layout.map(function (l) {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:<div className="columns">{this.stringifyLayout()}</div>
        </div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}

const contentDiv = document.getElementById("root");
ReactDOM.render(React.createElement(ExampleLayout,  window || {}), contentDiv);
