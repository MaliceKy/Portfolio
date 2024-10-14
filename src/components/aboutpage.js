// About.js
// src/components/aboutpage.js
import React, { useState } from 'react';
import '../assests/styles/about.css'
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';

const About = () => {

    const [clicked] = useState({});
    const navigate = useNavigate();

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
                    <div className="glass">
                        <h1 className="about-Title">Who am I?</h1>
                        <p className="about-Title-Desc">Hello, I’m Kyle Malice, a passionate Computer Science student at the University of Delaware. Born and raised in Delaware, my curiosity for technology has driven me to explore a wide range of development fields. From front-end web development to mobile app creation with React Native, I thrive on tackling diverse challenges. I’m always eager to step out of my comfort zone, continuously growing my technical expertise. Along with a solid foundation in coding, I bring strong problem-solving abilities, clear communication, and teamwork to every project I take on.</p>
                    </div>

                    <div className="glass">
                        <h1 className="about-Title">Skills.</h1>
                        <p className="about-Title-Desc">My academic and personal pursuits have equipped me with proficiency in several programming languages and technologies. I am highly skilled in JavaScript, React, HTML, CSS, and more recently, React Native, which I’ve deepened through my internship at Clinical Ink, where I worked on their iOS and Android applications. Beyond coding, I have a strong understanding of building computers and troubleshooting various tech issues, making me versatile in the tech landscape.</p>
                    </div>

                    <div className="glass">
                        <h1 className="about-Title">Education.</h1>
                        <p className="about-Title-Desc"> 
                            - Associate's Degree from Delaware Technical Community College, obtained in 2024.
                            <br />
                            - Bachelor's Degree in Computer Science from the University of Delaware, expected May 2025.
                        </p>
                    </div>


                    <div className="glass">
                        <h1 className="about-Title">Hobbies.</h1>
                        <p className="about-Title-Desc">Outside of my academic and professional interests, I am passionate about health and fitness. I enjoy skiing, watching movies and TV shows, and love spending time coding and creating mods for video games. These hobbies not only keep me active and creative but also reinforce the discipline, focus, and problem-solving skills I bring to my work.</p>
                    </div>

                    <div className="about-buttonContainer">
                        <Link to="/projects" className={`tabs ${clicked['projects'] ? 'clicked' : ''}`} onClick={() => navigate('/projects')}>
                            <span className={`button-text ${clicked['projectsText'] ? 'clicked' : ''}`}>Past Projects.</span>
                            <ArrowRightIcon className={`arrow ${clicked['projectsButton'] ? 'clicked' : ''}`} />
                        </Link>

                        <Link to="/" className={`tabs ${clicked['home'] ? 'clicked' : ''}`} onClick={() => navigate('/')}>
                            <span className={`button-text ${clicked['homeText'] ? 'clicked' : ''}`}>Back to Home.</span>
                            <ArrowRightIcon className={`arrow ${clicked['homeButton'] ? 'clicked' : ''}`} />
                        </Link>

                        <a href="mailto:Malice.Kyle@gmail.com" className={`tabs ${clicked['contact'] ? 'clicked' : ''}`}>
                            <span className={`button-text ${clicked['contactText'] ? 'clicked' : ''}`}>Get In Contact.</span>
                            <ArrowRightIcon className={`arrow ${clicked['contactButton'] ? 'clicked' : ''}`} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;