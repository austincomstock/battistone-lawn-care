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
            href="https://www.google.com/maps/place/West+Haven,+UT/@41.2096563,-112.1196149,12z/data=!3m1!4b1!4m5!3m4!1s0x87530ed77073d993:0x979ce0cd87d5794!8m2!3d41.2029998!4d-112.0510533"
            target="_blank"
            rel="noreferrer"
          >
            <GoLocation /> West Haven, Utah
          </a>
        </li>
        <li>
          <AiOutlineMail /> battistonelawncare@gmail.com
        </li>
      </ul>
    </div>
  );
};
