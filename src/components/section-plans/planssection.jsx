import PlansCard from "./planscard";
import Plan1 from "../../assets/plan1.jpeg";
import Plan2 from "../../assets/plan2.jpeg";

import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PlansSection = () => {
  const [categories, setCategories] = useState([
    "Weight Loss",
    "Vegetarian",
    "Gluten-free",
    "Lactose-free",
    "Old age",
    "Vegan",
    "Pregnant",
    "Knee problems",
  ]);
  return (
    <section
      className="bg-white lg:px-12 flex flex-col gap-20 h-auto lg:w-11/12 w-4/5 mx-auto max-w-screen-xl pt-20"
      id="plans"
    >
      <div className="text-center text-textprimary-100">
        <h3 className="md:text-2xl text-base font-semibold">Plans</h3>
        <h2 className="md:text-5xl text-2xl font-semibold">
          FIT-IN chooses from 1000+ custom plans
        </h2>
      </div>
      <div className="text-center grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-16 justify-items-center">
        <PlansCard title="Beginner" level="Easy" imageURL={Plan1} />
        <PlansCard title="Intermediate" level="Medium" imageURL={Plan2} />
        <div className="md:col-span-2 xl:col-span-1">
          <h3 className="text-2xl text-center font-semibold text-textprimary-100">
            Works for anyone
          </h3>
          <ul className="flex flex-col gap-4 mt-8 text-base font-normal text-textprimary-100">
            {categories.map((category, index) => {
              return (
                <li
                  className="flex justify-start gap-5 mt-3"
                  key={index}
                >
                  <span className="">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className="">{category}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="text-center mb-10"><a href="/"
      className="transition-all duration-[3000ms]  border-b-2 pb-1 border-textprimary-100 hover:border-none text-textprimary-100"
      > 
      See all Plans <FontAwesomeIcon icon={faArrowRight} /></a></div>
    </section>
  );
};

export default PlansSection;
