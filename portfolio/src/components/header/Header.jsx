import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/first-page-dp.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi, my name is</h4>
        <h1>Abhijeet (Harry) Gawade</h1>
        <h4 className="text-light">Software Engineer | Web Developer</h4>
        {/* <CTA /> */}
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="mailto:abhijeet.gawade@nyu.edu" className="scroll__down">
          abhijeet.gawade@nyu.edu
        </a>
      </div>
    </header>
  );
};

export default Header;
