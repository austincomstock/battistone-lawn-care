import React from "react";
import "./About.css";

import { BsTelephone } from "react-icons/bs";

export const About = () => {
  return (
    <div id="About1">
      <h3 id="AboutH3">
        Call or Text <BsTelephone /> 385-626-9489
      </h3>
      <div id="About2">
        <p>Prices starting as low as $30 for weekly mowing.</p>
        <p>
          Battistone Lawn Care is a family owned business operating out of West
          Haven, UT.
        </p>
        <p>We offer quality lawn care at a fair price.</p>
      </div>
    </div>
  );
};
