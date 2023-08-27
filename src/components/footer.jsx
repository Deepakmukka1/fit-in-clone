import React from "react";
import Logo from '../assets/logo3.png'
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <section className="mx-auto max-w-screen-xl grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-16 mt-10 px-12 items-start place-items-center pb-20">
      
      <div className="lg:order-3 order-1">
        <h3 className="text-[#555555] font-semibold text-sm">Account</h3>
        <ul className="mt-8 flex flex-col gap-4 text-[#767676] text-sm">
          <li>
            <a href="">Create account</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
          <li>
            <a href="">iOS app</a>
          </li>
          <li>
            <a href="">Android app</a>
          </li>
        </ul>
      </div>
      <div className="lg:order-4 order-2">
        <h3 className="text-[#555555] font-semibold text-sm">Company</h3>
        <ul className="mt-8 flex flex-col gap-4 text-[#767676] text-sm">
          <li>
            <a href="">About FIT-IN</a>
          </li>
          <li>
            <a href="">For Businessnt</a>
          </li>
          <li>
            <a href="">Fitness partners</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
      </div>
      <div className="lg:order-5 order-3">
        <h3 className="text-[#555555] font-semibold text-sm">Resources</h3>
        <ul className="mt-8 flex flex-col gap-4 text-[#767676] text-sm">
          <li>
            <a href="" className="">Fitness directory</a>
          </li>
          <li>
            <a href="">Help center</a>
          </li>
          <li>
            <a href="">Privacy & terms</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 lg:gap-10 text-[#555555] lg:order-1 order-4">
        <img src={Logo} className="rounded-xl" height="200px" width="200px" alt="Logo"/>
        <div className="flex gap-4 justify-center lg:justify-start w-full">
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faTwitter}/>
        </div>
        <p className="text-xs sm:text-sm text-center lg:text-left">Copyright © 2023 by FIT-IN, Inc. All rights reserved.</p>
      </div>
      <div className="flex flex-col lg:gap-10 gap-4 text-[#767676] lg:order-2 order-5 lg:col-span-1 col-span-2">
        <h3 className="text-[#555555] font-semibold">Contact Us</h3>
        <p className="text-sm">Express Avenue, 2nd Floor, Banglore, KA 610232</p>
        <p className="text-sm">9999932491 hello@fitin.com</p>
      </div>
    </section>
  );
};

export default Footer;
