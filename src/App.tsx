import React from "react";
import ShowcaseLayout from "./components/ShowcaseLayout";
import "tailwindcss/tailwind.css";
import "@fontsource/source-sans-pro";
import ModalButtonShow from "./components/ModalButtonShow";

export default class App extends React.Component{
  
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
        <header>
          <div className="flex items-center justify-between">
            <div className="text-base lg:text-3xl text-black font-bold p-3 pt-0">Monitoring and Performance</div>
            <ModalButtonShow />
          </div>
        </header>
        
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}
