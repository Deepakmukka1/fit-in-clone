import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Ribbon from "./ribbon";
const PricingCard = ({ details }) => {
  const {
    planName,
    cost,
    costPerDay,
    currency,
    avialableFeatures,
    nonAvialableFeatures,
  } = details;
  return (
    <div className="relative overflow-hidden sm:p-12 p-8 bg-background flex flex-col gap-4 justify-center items-center rounded-xl text-center w-full text-[#555555] ">
      <h3 className="uppercase">{planName}</h3>
      <div>
        <h2 className="font-semibold text-[#222222] mb-4">
          {currency} <span className="sm:text-5xl text-4xl ">{cost}</span>{" "}
          <span className="sm:text-2xl text-xl font-normal">/month</span>
        </h2>
        <h3 className="text-sm">
          Just {currency}
          {costPerDay} per day
        </h3>
      </div>
      <div className="w-full">
        <ul className="flex flex-col gap-1 mt-8 mb-4 text-base font-normal text-[#555555] text-left">
          {avialableFeatures.map((feature, index) => {
            return (
              <li
                className="flex sm:justify-start justify-center sm:gap-10 gap-2 mt-3 items-center"
                key={index}
              >
                <span className="">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="text-xs sm:text-sm lg:text-lg">{feature}</span>
              </li>
            );
          })}

          {nonAvialableFeatures.map((feature, index) => {
            return (
              <li
                className="flex sm:justify-start justify-center sm:gap-10 gap-2 mt-3 items-center"
                key={index}
              >
                <span className="">
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <span className="text-xs sm:text-sm lg:text-lg">No diet</span>
              </li>
            );
          })}
        </ul>
      </div>

      {planName === "Pro" ? <Ribbon /> : ""}

      <button className="bg-[#343A40] text-white rounded-md px-5 py-3 lg:px-6 lg:py-2 font-normal lg:text-xl text-base hover:bg-[#495057] transition-all duration-3000 tracking-wider mt-2">
        <a href="#details">Start Getting Fit</a>
      </button>
    </div>
  );
};

export default PricingCard;

