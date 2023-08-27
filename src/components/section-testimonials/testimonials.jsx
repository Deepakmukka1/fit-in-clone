import React, { useState } from "react";
import TestimonialCard from "./testimonialcard";
import TestimonialImage1 from "../../assets/testimonial1.jpg";
import TestimonialImage2 from "../../assets/testimonial2.jpg";
import TestimonialImage3 from "../../assets/c4.jpg";
import TestimonialImage4 from "../../assets/c2.jpg";
import WorkoutGallery from "./workoutgallery";

const TestimonialSection = () => {
  const [testimonials] = useState([
    {
      authorName: "Jessica Arnold",
      authorImageURL: TestimonialImage1,
      testimonialText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,delectus est consectetur ipsa perspiciatis ",
    },
    {
      authorName: "Nathan wilick",
      authorImageURL: TestimonialImage2,
      testimonialText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,delectus est consectetur ipsa perspiciatis ",
    },
    {
      authorName: "Chris Brown",
      authorImageURL: TestimonialImage3,
      testimonialText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,delectus est consectetur ipsa perspiciatis ",
    },
    {
      authorName: "Andy aryan",
      authorImageURL: TestimonialImage4,
      testimonialText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,delectus est consectetur ipsa perspiciatis ",
    },
  ]);

  return (
    <section
      className="bg-background w-full mx-auto text-textprimary-100"
      id="testimonials"
    >
      <div className="grid lg:grid-cols-2 bg-background">
        <div className="lg:p-20 p-8 flex flex-col justify-center items-center mt-10">
          <div>
            <h3 className="uppercase sm:text-xl text-base font-medium">
              Testimonials
            </h3>
            <h2 className="lg:text-5xl sm:text-3xl text-xl font-semibold mt-4">
              {" "}
              Once you try it, you can't go back
            </h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-16 mt-20">
              {testimonials.map(
                ({ authorImageURL, authorName, testimonialText }, index) => {
                  return (
                    <TestimonialCard
                      key={index}
                      imageURL={authorImageURL}
                      authorName={authorName}
                      testimonialText={testimonialText}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 items-center justify-center overflow-clip">
          <WorkoutGallery />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
