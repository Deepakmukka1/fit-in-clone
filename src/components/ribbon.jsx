import React from "react";

const Ribbon = () => {
  return (
    <div className="overflow-hidden">
      <div className="absolute right-0 top-0 h-16 w-16">
        <div className="absolute uppercase transform rotate-45 bg-[#777777] text-center text-white font-semibold py-1 sm:-right-[50px] sm:top-[40px] sm:w-[200px] w-[100px] top-[20px] -right-[20px] sm:text-base text-[0.5rem]">
          Best Value
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
