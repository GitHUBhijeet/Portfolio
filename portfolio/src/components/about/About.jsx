import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/second-page-dp.jpg";
import { FaGraduationCap, FaLaptop } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>MS in CS @NYU</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Internships</h5>
              <small>@TomTom, Tata Motors, Xilo.io</small>
            </article>
            <article className="about__card">
              <FaLaptop className="about__icon" />
              <h5>Research Fellowships</h5>
              <small>
                @NTU, Singapore | Teesside Uni, UK | ITU, San Jose, CA
              </small>
            </article>
          </div>
          <p>
            Hello! My name is Abhijeet (Harry) and I have just{" "}
            <span>
              graduated (May 2023) from NYU with a Master's Degree in Computer
              Science
            </span>
            . I have a passion for Coding and Problem Solving. I love working on
            anything that involves writing Code.
          </p>
          <p>
            I have had the previlage of working at {""}
            <a href="https://www.tomtom.com" target="__blank">
              a Dutch MNC that specializes in navigation
            </a>
            ,{" "}
            <a href="https://www.tatamotors.com" target="__blank">
              {" "}
              India's biggest car manufactoring company{" "}
            </a>{" "}
            and{" "}
            <a href="https://www.xilo.io" target="__blank">
              a SaaS startup{" "}
            </a>
            . I am actively looking for a Web Developer or a Software Developer
            role (as of {currentDate}).
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
