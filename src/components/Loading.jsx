import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[85vh]">
      <ScaleLoader color="#ED4C67" size={90} />
    </div>
  );
};

export default Loading;
