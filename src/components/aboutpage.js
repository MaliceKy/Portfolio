// About.js
// src/components/aboutpage.js
import React from 'react';
import '../assests/styles/about.css'

const About = () => {
  return (
    <div className="about-background">
        <div className="about-container position-relative">
            <div className="about-hello-container position-absolute w-100 d-block d-md-none">
                <div className="about-hello">About Me.</div>
            </div>
            <div className="about-hello-container d-none d-md-block">
                <div className="about-hello">About Me.</div>
            </div>
            <div className="about-main-content position-relative">
                <div className="about-content-container">
                    <h1 className="about-Title">Introduction.</h1>
                    <p className="about-Title-Desc">Web development enthusiast, proficient in JavaScript, CSS, HTML, and React, pursuing a Bachelor's in Computer Science. Ambitious, challenge-seeking, and eager to innovate in the dynamic web industry. Simple, direct, future-focused. Let's connect.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;

