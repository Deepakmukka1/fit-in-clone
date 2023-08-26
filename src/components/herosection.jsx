import HeroImage from "../assets/hero4.jpg";
import { Button } from "./button";
import Customers from "./customers";
const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center pt-12 pb-24 items-center mx-auto xl:px-16 xl:gap-6 gap-8 bg-background">
      <div className="flex flex-col mx-auto xl:px-14 px-10 xl:pb-5 items-center justify-center lg:gap-12 gap-8">
        <h1 className="text-[#333333] font-bold md:text-5xl text-4xl leading-none -tracking-wider">
          Being healthy or fit isn't a fad or a trend. It's a lifestyle.
        </h1>
        <h4 className="xl:text-xl text-base text-[#555555]">
          The smart 365-days-per-year fitness subscription. Tailored to your
          personal health and nutritional needs.
        </h4>
        <div className="flex flex-row sm:gap-10 gap-2 justify-center lg:justify-start w-full ">
          <button className="bg-[#343A40] text-white rounded-md px-5 py-1 lg:px-6 lg:py-3 font-normal lg:text-xl text-base hover:bg-[#495057] transition-all duration-3000 tracking-wider">
            <a href="#howto">Start Getting Fit</a>
          </button>
          <button className="bg-[#ced4da] text-textprimary rounded-md px-5 py-1 lg:px-6 lg:py-3 font-normal lg:text-xl text-base hover:bg-[#dee2e6] transition-all duration-3000 hover:border-gray-800 border-2 tracking-wider">
            <a href="#howto">Learn More</a>
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
    </section>
  );
};

export default HeroSection;
