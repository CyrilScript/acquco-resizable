import React from "react";
// import ReactDOM from "react-dom";
import ShowcaseLayout from "./components/ShowcaseLayout";
import "tailwindcss/tailwind.css";

type LayoutProps = {
  props?: any;
};
type LayoutState = {
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    i: JSX.Element;
    static: boolean;
  }[];
};

export default class App extends React.Component<LayoutProps, LayoutState> {
  constructor(props?: any) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout: []) {
    this.setState({ layout: layout });
  }

  render() {
    return (
      <div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}


