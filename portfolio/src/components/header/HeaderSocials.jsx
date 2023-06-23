import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/abbhijeetgavade/" target="__blank">
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com/GitHUBhijeet" target="__blank">
        <BsGithub size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
