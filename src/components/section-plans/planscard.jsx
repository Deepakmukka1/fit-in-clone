
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass2,
  faBowlFood,
  faCircleInfo,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "./badge";
const PlansCard = ({title, imageURL, level}) => {
  return (
    <div className="flex flex-col border-1 rounded-2xl shadow-2xl hover:scale-[1.02] hover:-translate-y-6 transition-all duration-500 cursor-pointer w-5/6 sm:w-80">
      <div className="object-cover">
        <img src={imageURL} className="rounded-tl-2xl rounded-tr-2xl" alt="yoga girls"/>
      </div>
      <div className="flex flex-col gap-4 justify-start items-start sm:p-6 p-8 text-textprimary">
        <Badge level={level}/>
        <h3 className="sm:text-2xl text-lg font-bold">{title}</h3>
        <ul className="w-full mt-2 text-sm sm:text-lg font-normal">
          <li className="flex justify-start sm:gap-5 gap-1 mt-3">
            {" "}
            <span className="">
              <FontAwesomeIcon icon={faHourglass2} />{" "}
            </span>{" "}
            <span className="">1 hour exercise</span>
          </li>
          <li className="flex justify-start sm:gap-5 gap-2 mt-3">
            {" "}
            <span>
              <FontAwesomeIcon icon={faBowlFood} />{" "}
            </span>{" "}
            <span className="">2200 calories per day</span>
          </li>
          <li className="flex justify-start sm:gap-5 gap-2 mt-3">
            {" "}
            <span>
              <FontAwesomeIcon icon={faCircleInfo} />{" "}
            </span>{" "}
            <span className="">FIT-IN® score: 76</span>
          </li>
          <li className="flex justify-start sm:gap-5 gap-2 mt-3">
            {" "}
            <span>
              <FontAwesomeIcon icon={faStar} />{" "}
            </span>{" "}
            <span className="">4.4 rating (256)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlansCard;
