export type initialLayoutType = { x: number; y: number; w: number; h: number; i: string; type: string }[];

export type ShowcaseLayoutProps = {
    onLayoutChange: (a?: any, b?: any) => void;
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
  
export  type ShowcaseLayoutState = {
    currentBreakpoint: string;
    compactType: any;
    layouts?: any;
    mounted: boolean;
  };