import React from "react";

export default function ProgressChart() {
  const progressItem = [
    { width: "70.00%", backgroundColor: "#2DA39B" },
    { width: "20.00%", backgroundColor: "#EE5511" },
    { width: "10.00%", backgroundColor: "#FFC34F" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-content-center">
      <div className="w-5/6 m-auto flex  py-3 text-gray-500 text-sm font-bold font-mono leading-6 border-x-2 border-x-gray-500 border-dashed">
        {progressItem.map((data, index) => (
          <div
            className="tooltip flex-auto p-6 flex items-center justify-center shadow-lg"
            key={index}
            style={{ backgroundColor: data.backgroundColor, width: data.width }}
          >
            <span className="tooltiptext">{data.width}</span>
          </div>
        ))}

        <div className="flex text-xs absolute defaultSectioningWrapper mx-auto w-5/6 ">
          <div className="flex flex-1 w-full defaultSectioning">
            <span className="text">0</span>
          </div>
          <div className="flex flex-1 w-full defaultSectioning">
            <span className="text">20</span>
            <span className="marker"></span>
          </div>
          <div className="flex flex-1 w-full defaultSectioning">
            <span className="text">40</span>
            <span className="marker"></span>
          </div>
          <div className="flex flex-1 w-full defaultSectioning">
            <span className="text">60</span>
            <span className="marker"></span>
          </div>
          <div className="flex flex-1 w-full defaultSectioning">
            <span className="text">80</span>
            <span className="marker"></span>
          </div>
          <div className="w-max ml-auto defaultSectioning">
            <span className="text" style={{ marginLeft: "-1rem" }}>
              100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
