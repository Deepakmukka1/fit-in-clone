import React from "react";

const DetailsCard = ({instructionCount, title, detailImageURL}) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-10 mx-auto mt-20 lg:mb-32 mb-12 lg:even:flex-row-reverse">
      <div className="">
        <h2 className="lg:text-8xl text-6xl font-bold text-[#cccccc]">{instructionCount}</h2>
        <h3 className="lg:text-2xl text-3xl text-[#555555] font-semibold">{title}</h3>
        <p className="lg:text-base text-lg mt-6 text-[#555555] lg:leading-none leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe obcaecati voluptatum doloremque quod natus, dolorum animi. Sed
          iste repellendus quisquam adipisci, necessitatibus quam nesciunt illo
          alias voluptatum eius ad?
        </p>
      </div>
      <div className="">
        <img src={detailImageURL} className="rounded-xl object-cover shadow-2xl"/>
      </div>
    </div>
  );
};

export default DetailsCard;
