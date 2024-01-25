import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/second-page-dp.jpg";
import { FaCar, FaMusic, FaSchool, FaLaptop } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiSolidNavigation } from "react-icons/bi";
import { MdRealEstateAgent, MdAssistantNavigation } from "react-icons/md";
import { PiNavigationArrowFill } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";

const About = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toDateString());
  }, []);

  return (
    <section id="about">
      <h5>01.</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>MS in CS @NYU</small>
            </article> */}

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__detials-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article> */}

            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Work Experience</h5>
              <small>
                <FaMusic /> Dottwav <br /> <MdRealEstateAgent /> Xilo.io <br />{" "}
                <PiNavigationArrowFill />
                TomTom <br /> <FaCar /> Tata Motors
              </small>
            </article>
            <article className="about__card">
              <FaLaptop className="about__icon" />
              <h5>Research Fellowships</h5>
              <small>
                <IoSchool /> NTU, Singapore <br /> <IoSchool /> Teesside
                University, UK <br /> <IoSchool /> ITU, San Jose, CA
              </small>
            </article>
          </div>
          <p>
            Hello! My name is Abhijeet (Harry),
            <span>
              {" "}
              an NYU graduate with a Master's Degree in Computer Science
            </span>
            . I have a passion for Coding and Problem Solving. I love working on
            anything and everything that involves writing code.
          </p>
          <p>
            I have had the privilege of working at {""}
            <a href="https://www.tomtom.com" target="__blank">
              a Dutch MNC that specializes in navigation
            </a>
            ,{" "}
            <a href="https://www.tatamotors.com" target="__blank">
              {" "}
              India's biggest car manufacturing company
            </a>{" "}
            and{" "}
            <a href="https://www.xilo.io" target="__blank">
              a SaaS startup
            </a>
          </p>
          <div className="shoutouts">
            <a
              href="https://www.linkedin.com/in/abbhijeetgavade/"
              target="__blank"
            >
              <BsLinkedin size={40} />
            </a>
            <a href="https://github.com/GitHUBhijeet" target="__blank">
              <BsGithub size={40} />
            </a>
          </div>
          {/* <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
