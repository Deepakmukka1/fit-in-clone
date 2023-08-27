import React from "react";
import TestimonialCard from "./testimonalcard";
import TestimonialImage1 from "../../assets/testimonial1.jpg";
import TestimonialImage2 from "../../assets/testimonial2.jpg";
import TestimonialImage3 from "../../assets/c4.jpg";
import TestimonialImage4 from "../../assets/c2.jpg";
import WorkoutGallery from "./workoutgallery";

const TestimonialSection = () => {
  return (
    <section className="bg-background w-full mx-auto text-[#555555]" id="testimonials">
        <div className="grid lg:grid-cols-2 bg-background">
      <div className="lg:p-20 p-8 flex flex-col justify-center items-center mt-10">
        <div>
          <h3 className="uppercase sm:text-xl text-base font-medium">Testimonials</h3>
          <h2 className="lg:text-5xl sm:text-3xl text-xl font-semibold mt-4"> Once you try it, you can't go back</h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 mt-20">
            <TestimonialCard imageURL={TestimonialImage1} authorName="Harris"/>
            <TestimonialCard imageURL={TestimonialImage2} authorName="Harris"/>
            <TestimonialCard imageURL={TestimonialImage3} authorName="Harris"/>
            <TestimonialCard imageURL={TestimonialImage4} authorName="Harris"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 items-center justify-center overflow-clip"><WorkoutGallery/></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
