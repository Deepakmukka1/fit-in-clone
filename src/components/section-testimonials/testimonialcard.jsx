import React from "react";

const TestimonialCard = ({testimonialText, imageURL, authorName}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img
          alt="testimonail customers"
          src={imageURL}
          className="w-16 h-16 rounded-full object-contain"
        />
      </div>
      <div>
        <p className="text-ellipsis md:text-lg text-base">
          {testimonialText}
        </p>
      </div>
      <div>
        <h4>- {authorName}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
