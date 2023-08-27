import { useState } from "react";
import Logo from "../assets/logo3.png";
import { Button } from "./button";
const NavigationBar = () => {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "How it works", path: "#howto" },
    { title: "Plans", path: "#plans" },
    { title: "Testimonals", path: "#testimonials" },
    { title: "Pricing", path: "#pricing" },
  ];

  return (
    <nav className="w-full bg-background">
      <div className="items-center px-6 mx-auto lg:flex lg:px-12">
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <a href="/">
            <img src={Logo} height="200px" width="200px" alt="Logo" />
          </a>
          <div className="lg:hidden">
            <button
              className="text-textprimary outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-center text-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center md:justify-end items-center space-y-4 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-textprimary font-medium pr-4 hover:text-gray-800 md:text-lg text-base transition-all tracking-wider"
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
            <Button text="Free trail" isPrimary={true}/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
