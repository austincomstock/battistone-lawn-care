import React from "react";
import "./Navigation.css";

import { BsTelephone, BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export const Navigation = () => {
  return (
    <div id="Nav1">
      <ul id="Nav2">
        <li>
          <BsTelephone /> 385-626-9489
        </li>

        <li>
          <a
            className="A1"
            href="https://www.facebook.com/BattistoneLC"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook /> Facebook
          </a>
        </li>
        <li>
          <a
            className="A1"
            href="https://www.instagram.com/battistonelc/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram /> Instagram
          </a>
        </li>
        <li>
          <a
            className="A1"
            href="https://www.google.com/maps/place/Weber+County,+UT/@41.2649447,-112.1560139,10.5z/data=!4m6!3m5!1s0x87530c0b357d8a97:0x6305f2940ccb94f4!8m2!3d41.2602635!4d-111.9522491!16zL20vMGpjbWo?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <GoLocation /> Weber County, Utah
          </a>
        </li>
        <li>
          <AiOutlineMail /> battistonelawncare@gmail.com
        </li>
      </ul>
    </div>
  );
};
