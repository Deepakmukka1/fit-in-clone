import React from "react";
import DetailsCard from "./detailscard";
import DescriptionImage1 from "../../assets/step-img1.jpeg";
import DescriptionImage2 from "../../assets/step-img2.jpeg";
import DescriptionImage3 from "../../assets/step-img3.jpeg";
import DescriptionImage4 from "../../assets/step-img5.jpeg";
const DetailsSection = () => {
  return <section className="bg-white lg:p-20 px-12 py-20 flex flex-col h-auto lg:w-10/12 mx-auto max-w-screen-xl" id="details">
    <div>
        <h3 className="lg:text-xl text-sm uppercase font-medium">How it works</h3>
        <h1 className="lg:text-5xl text-3xl text-textprimary-100 font-bold mt-4">Your daily dose of fitness in 4 simple steps</h1>
    </div>
    <div className="">
        <DetailsCard instructionCount="01" title="Tell us what you like (and what not)" detailImageURL={DescriptionImage1}/>
        <DetailsCard instructionCount="02" title="Approve your weekly fitness plan" detailImageURL={DescriptionImage2}/>
        <DetailsCard instructionCount="03" title="Get the diet which best fits your needs" detailImageURL={DescriptionImage3}/>
        <DetailsCard instructionCount="04" title="Get fitness exercises tailored to your needs" detailImageURL={DescriptionImage4}/>
    </div>
  </section>;
};

export default DetailsSection;
