import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from "../../assets/hero4.jpg";

import Customers from "./customers";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 text-center items-center mx-auto pt-12 pb-24 gap-8 max-w-screen-2xl lg:grid-cols-2 lg:text-left xl:px-20 xl:gap-6 ">
        <div className="flex flex-col mx-auto items-center px-10 gap-8 justify-center xl:px-14 xl:pb-5 lg:gap-10 ">
          <h1 className="text-textprimary-200 font-bold text-4xl leading-none -tracking-wide md:text-5xl">
            Being healthy or fit isn't a fad or a trend. It's a lifestyle.
          </h1>
          <h4 className="text-base text-textprimary-100 xl:text-xl">
            The smart 365-days-per-year fitness subscription. Tailored to your
            personal health and nutritional needs.
          </h4>
          <div className="flex flex-col gap-2 justify-center sm:flex-row sm:gap-10 sm:w-full lg:justify-start ">
            <button className="bg-background-300 text-white rounded-md px-5 py-2 font-normal lg:px-6 lg:py-3 text-sm lg:text-xl hover:bg-background-500 transition-all duration-3000 tracking-wider">
              <a href="#contact">Start Getting Fit</a>
            </button>
            <button className="bg-background-200 text-textprimary rounded-md px-5 py-2 font-normal lg:px-6 text-sm lg:py-3 lg:text-xl hover:bg-background-100 transition-all duration-3000 hover:border-gray-800 border-2 tracking-wider">
              <a href="#details">
                Learn More <FontAwesomeIcon icon={faArrowDown} />{" "}
              </a>
            </button>
          </div>
          <Customers />
        </div>
        <div className="flex justify-center text-center">
          <img
            alt="yoga girl"
            src={HeroImage}
            className="rounded-2xl shadow-2xl w-11/12 h-11/12"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
