import React from "react";
import Contact1 from "../../assets/contact1.jpeg";
const ContactForm = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 bg-gradient-to-r from-background-50 to-background-100  max-w-screen-xl mx-auto w-4/5 lg:w-full text-textprimary-100 rounded-xl">
      <div className="col-span-2 lg:px-20 sm:px-10 sm:py-16 p-6 flex flex-col gap-5 justify-center">
        <h2 className="md:text-5xl text-xl font-semibold">Get one week free trial!</h2>
        <h3 className="md:text-lg text-sm">
          Get fit and eat healthy with us. Start your fitness journey today. You
          can pause or cancel anytime. And the first week trial is on us!
        </h3>
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-end text-base">
          <div className="block">
            <label htmlFor="fullname" className="block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="fullname"
              className="md:p-3 px-2 py-1 bg-background-100 rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 ">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="md:p-3 px-2 py-1 text-base bg-background-100 rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="where" className="block mb-2 font-base">Where did you hear about us?</label>
            <select name="where" className="md:p-3 px-2 py-1 text-base bg-background-100 rounded-lg shadow-lg w-full">
              <option value="">Please choose any one:</option>
              <option value="friends">Friends or Family</option>
              <option value="socials">Social Media</option>
              <option value="newspaper">Newspaper</option>
              <option value="tv">Television AD</option>
            </select>
          </div>

            <button className="bg-background-25 w-full p-3 rounded-xl text-black hover:bg-white transition-all duration-700">Sign up now</button>
        </form>
      </div>
      <div className="-order-1 lg:order-1">
        <img src={Contact1} className="object-cover w-full rounded-t-xl lg:rounded-r-xl h-96 lg:h-full" alt="customer" />
      </div>
    </div>
  );
};

export default ContactForm;
