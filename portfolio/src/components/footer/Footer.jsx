import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a className="footer__logo">
        Actively Seeking Opportunities<h5>as of Jun 22 2023</h5>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Technologies</a>
        </li>
        <li>
          <a href="#portfolioo">Recent Projects</a>
        </li>
        <li>Email @ abhijeet.gawade@nyu.edu</li>
      </ul>
      <div className="footer__copyright">
        <small>Built with ❤️ by Abhijeet</small>
      </div>
    </footer>
  );
};

export default Footer;
