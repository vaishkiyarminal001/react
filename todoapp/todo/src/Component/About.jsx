import React from "react";
import "./About.css"; // Import your CSS file

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">
        Hello there! I'm Minal Kumari, the creator of this todo page. Welcome
        to my digital workspace. Here's a bit about me:
      </h1>
      <ul className="about-list">
        <li className="about-list-item">
          - I'm a passionate and organized individual on a mission to boost
          productivity and make life simpler.
        </li>
        <li className="about-list-item">
          - My love for technology and productivity tools inspired me to create
          this todo page to help myself and others stay organized.
        </li>
        <li className="about-list-item">
          - When I'm not busy managing tasks and crossing items off my list,
          you can find me exploring new hobbies, reading, or enjoying a good
          cup of coffee.
        </li>
        <li className="about-list-item">
          - I believe in the power of setting goals and staying focused, and
          I'm here to share that mindset with you through this platform.
        </li>
      </ul>
      <p className="about-text">
        Feel free to <span className="about-link">https://github.com/vaishkiyarminal001</span>, suggest
        improvements, or just say hi! I hope this todo page helps you as much
        as it helps me.
      </p>
      <p className="about-text">Happy tasking!</p>
    </div>
  );
};
