import React from "react";

import { MdRadioButtonChecked } from "@react-icons/all-files/md/MdRadioButtonChecked";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function ChainButton() {
  const login = async () => {
    try {
      const [wallet] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!wallet || wallet === "") {
        throw new Error("Metamask: not wallet address found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={login}>
      <div className="flex bg-bg rounded">
        <img
          src="/polygon-logo.svg"
          alt="Polygon logo"
          style={{
            transform: "scale(0.03)",
            width: "100%",
          }}
        />

        <p className="font-bold">Polygon</p>

        <Question />
      </div>
    </button>
  );
}

class Question extends React.Component {
  render() {
    return (
      <div className="px-2">
        <MdRadioButtonChecked style={{ color: true ? "green" : "red" }} />
      </div>
    );
  }
}
