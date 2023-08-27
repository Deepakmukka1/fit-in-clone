import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from "../../assets/hero4.jpg";

import Customers from "./customers";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center pt-12 pb-24 items-center mx-auto xl:px-20 xl:gap-6 gap-8 max-w-screen-2xl">
      <div className="flex flex-col mx-auto xl:px-14 px-10 xl:pb-5 items-center justify-center lg:gap-10 gap-8">
        <h1 className="text-textprimary-200 font-bold md:text-5xl text-4xl leading-none -tracking-wide">
          Being healthy or fit isn't a fad or a trend. It's a lifestyle.
        </h1>
        <h4 className="xl:text-xl text-base text-textprimary-100">
          The smart 365-days-per-year fitness subscription. Tailored to your
          personal health and nutritional needs.
        </h4>
        <div className="flex sm:flex-row flex-col sm:gap-10 gap-2 justify-center lg:justify-start sm:w-full">
          <button className="bg-background-300 text-white rounded-md px-5 py-2 lg:px-6 lg:py-3 font-normal lg:text-xl text-sm hover:bg-background-500 transition-all duration-3000 tracking-wider">
            <a href="#contact">Start Getting Fit</a>
          </button>
          <button className="bg-background-200 text-textprimary rounded-md px-5 py-2 lg:px-6 lg:py-3 font-normal lg:text-xl text-sm hover:bg-background-100 transition-all duration-3000 hover:border-gray-800 border-2 tracking-wider">
            <a href="#details">Learn More <FontAwesomeIcon icon={faArrowDown}/> </a>
          </button>
        </div>
        <Customers />
      </div>
      <div className="flex justify-center text-center">
        <img
          src={HeroImage}
          className="rounded-2xl shadow-2xl w-11/12 h-11/12"
        />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
