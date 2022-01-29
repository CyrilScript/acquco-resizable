import React from "react";
// import ReactDOM from "react-dom";
import ShowcaseLayout from "./components/ShowcaseLayout";
import "tailwindcss/tailwind.css";
import "@fontsource/source-sans-pro";


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
        <header className="text-3xl text-black font-bold p-3 pt-0">
          Monitoring and Performance
        </header>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}


