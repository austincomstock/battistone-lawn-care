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
          <GoLocation /> West Haven, Utah
        </li>
        <li>
          <BsTelephone /> 385-626-9489
        </li>
        <li>
          <AiOutlineMail /> battistonelawncare@gmail.com
        </li>
        <li>
          <a
            className="A1"
            href="https://www.facebook.com/BattistoneLC"
            target="_blank"
          >
            <BsFacebook /> Facebook
          </a>
        </li>
        <li>
          <a
            className="A1"
            href="https://www.instagram.com/battistonelc/"
            target="_blank"
          >
            <BsInstagram /> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
