import React from "react";

export default function ProgressChart() {
  const progressItem = [
    { width: "70.00%", backgroundColor: "#2DA39B" },
    { width: "20.00%", backgroundColor: "#EE5511" },
    { width: "10.00%", backgroundColor: "#FFC34F" },
  ];

  return (
     <div className="w-full h-full flex justify-content-center">
      <div className=" w-5/6 m-auto flex  py-3 text-white text-sm font-bold font-mono leading-6 border-x-2 border-x-gray-500 border-dashed divide-x  divide-dashed">
        {progressItem.map((data, index) => (
          <div
            className={`tooltip flex-initial p-6 flex items-center justify-center shadow-lg inner__0${index}`}
            key={index}
            style={{ backgroundColor: data.backgroundColor, width:data.width}}
          >
           <span className="tooltiptext">{data.width}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
