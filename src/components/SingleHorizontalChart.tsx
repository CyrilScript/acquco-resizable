import React from "react";

export default function SingleHorizontalChart() {
  return (
    <div className="w-full h-full flex justify-content-center">
      <div className=" w-5/6 m-auto flex  py-3 text-white text-sm font-bold font-mono leading-6 border-x-2 border-x-gray-500 border-dashed divide-x  divide-dashed">
        <div className="relative flex-initial  w-64 h-14 flex items-center justify-center inner__01" style={{backgroundColor:"#2DA39B"}}>01</div>
        <div className="flex-initial  w-32 flex items-center justify-center bg-pink-500 shadow-lg inner__02" style={{backgroundColor:"#EE5511"}}>02</div>
        <div className="flex-initial  w-14 flex items-center justify-center bg-pink-500 shadow-lg inner__03" style={{backgroundColor:"#FFC34F"}}>03</div>
      </div>
    </div>
  );
}
