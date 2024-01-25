import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineMessage,
  AiOutlineProject,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <AiOutlineCode />
      </a>
      <a
        href="#portfolioo"
        className={activeNav === "#portfolioo" ? "active" : ""}
        onClick={() => {
          setActiveNav("#portfolioo");
        }}
      >
        <FiCode />
      </a>
      <a
        href="mailto:abhijeet.gawade@nyu.edu"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <SiGmail />
      </a>
    </nav>
  );
};

export default Nav;
