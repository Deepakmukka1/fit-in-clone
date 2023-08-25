import HeroImage from "../assets/hero4.jpg";
import { Button } from "./button";
import Customers from "./customers";
const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:text-left text-center pt-12 pb-24 items-center xl:mx-20 gap-6">
      <div className="flex flex-col mx-auto px-14 items-center justify-center lg:gap-12 gap-6">
        <h1 className="text-[#333333] font-bold lg:text-5xl text-4xl leading-none -tracking-wider">
          Being healthy or fit isn't a fad or a trend. It's a lifestyle.
        </h1>
        <h4 className="lg:text-xl text-base text-[#555555]">
          The smart 365-days-per-year fitness subscription. Tailored to your
          personal health and nutritional needs.
        </h4>
        <div className="flex flex-row sm:gap-10 gap-2 justify-center lg:justify-start w-full">
          <button className="bg-[#343A40] text-white rounded-md px-6 py-2 font-normal text-xl hover:bg-[#495057] transition-all duration-3000">
            Start Getting Fit
          </button>
          <button className="bg-[#ced4da] text-textprimary rounded-md px-6 py-2 font-normal text-xl hover:bg-[#dee2e6] transition-all duration-3000 hover:border-gray-800 border-2">
            Learn More
          </button>
        </div>
        <Customers />
      </div>
      <div className="flex justify-center text-center">
        <img
          src={HeroImage}
          className="rounded-2xl shadow-2xl w-10/12 h-10/12"
        />
      </div>
    </section>
  );
};

export default HeroSection;
