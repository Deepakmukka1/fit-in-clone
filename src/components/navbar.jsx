import { useState } from "react";
import Logo from "../assets/logo3.png";

import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = () => {
  const [isNavClicked, setNavClicked] = useState(false);
  const navigation = [
    { title: "How it works", path: "#details" },
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
              onClick={() => setNavClicked(!isNavClicked)}
            >
              {isNavClicked ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-center text-base text-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            isNavClicked ? "h-screen flex flex-col items-center" : "hidden"
          }`}
        >
          <ul
            className={`justify-center md:justify-end items-center space-y-4 lg:flex lg:space-x-6 lg:space-y-0`}
          >
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-textprimary font-medium pr-4 hover:text-gray-800 md:text-lg transition-all tracking-wider"
                  onClick={() => setNavClicked(!isNavClicked)}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
            <button
              className="bg-[#343A40] text-white rounded-md px-4 py-2 font-medium hover:bg-[#495057] transition-all duration-3000"
              onClick={() => setNavClicked(!isNavClicked)}
            >
              <a href="#contact"> Free trail </a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
