import React from "react";

import { MdRadioButtonChecked } from "@react-icons/all-files/md/MdRadioButtonChecked";

export default function ChainButton() {
  return (
    <button className="bg-bg text-black py-2 px-4 rounded">
      <div className="flex">
        <img
          src="/polygon-logo.svg"
          alt="Polygon logo"
          style={{ transform: "scale(0.5)" }}
        />
        <p>Polygon</p>
        <Question />
      </div>
    </button>
  );
}

class Question extends React.Component {
  render() {
    return (
      <p>
        <MdRadioButtonChecked style={{ color: true ? "green" : "red" }} />
      </p>
    );
  }
}
