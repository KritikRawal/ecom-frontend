import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

export default function Khalti({price}) {
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: price })}
        style={buttonStyles}
      >
        Pay Via Khalti
      </button>
    </div>
  );
}