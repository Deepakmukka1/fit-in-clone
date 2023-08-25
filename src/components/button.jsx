import React from "react";

export const Button = ({ text, onclick, isPrimary }) => {
  return isPrimary ? (
    <button
      className="bg-[#343A40] text-white rounded-md px-4 py-2 font-medium"
      onClick={onclick}
    >
      {text}
    </button>
  ) : (
    <button
      className="bg-[#ced4da] text-textprimary rounded-md px-4 py-2 font-medium"
      onClick={onclick}
    >
      {text}
    </button>
  );
};
