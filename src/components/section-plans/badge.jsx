import React from "react";

const Badge = ({ level }) => {
  switch (level) {
    case "Easy":
      return (
        <h2
          className="text-textprimary text-sm font-medium mr-2 px-2 py-1 rounded-full bg-badgegreen"
        >
          {level}
        </h2>
      );
    case "Medium":
      return (
        <h2
          className="text-textprimary text-sm font-medium mr-2 px-2 py-1 rounded-full bg-badgeorange"
        >
          {level}
        </h2>
      );
  }
};

export default Badge;
