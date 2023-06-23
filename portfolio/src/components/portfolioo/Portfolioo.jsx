import React from "react";
import "./portfolioo.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
const projects = [
  {
    id: 1,
    title: "Huluverse",
    image: IMG1,
    github: "https://github.com/GitHUBhijeet/Hulu-Clone",
    demo: "https://harrys-hullu-verse.netlify.app/",
  },
  {
    id: 2,
    title: "Usability",
    image: IMG2,
    github: "https://github.com/GitHUBhijeet/UsabilityHub-Clone",
    demo: "https://harrys-usabilityhub-clone.netlify.app",
  },
  {
    id: 3,
    title: "ThinkPad",
    image: IMG3,
    github: "https://github.com/GitHUBhijeet/ThinkPad",
    demo: "https://harrys-notes-app.netlify.app/",
  },
];

const Portfolioo = () => {
  return (
    <section id="portfolioo">
      <h5>03.</h5>
      <h2>Some Recent Projects</h2>

      <div className="container portfolioo__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolioo__item">
              <div className="portfolioo__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolioo__item-cta">
                <a href={github} className="btn " target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolioo;
