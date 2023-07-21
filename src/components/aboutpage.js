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
                        <p className="about-Title-Desc">Hello, I'm Kyle Malice, a dedicated Computer and Information Science student with a deep-rooted passion for technology and its transformative power. Born and raised in Delaware, I've always been driven by curiosity and a desire to step out of my comfort zone. This adventurous spirit has led me to the dynamic field of front-end development, where I constantly embrace new challenges and learning opportunities. Alongside my technical skills, I bring a strong set of soft skills to the table, including problem-solving, effective communication, and teamwork.</p>
                    </div>

                    <div className="glass">
                        <h1 className="about-Title">Skills.</h1>
                        <p className="about-Title-Desc">My academic and personal pursuits have equipped me with proficiency in several programming languages and technologies. I am adept at JavaScript, React, HTML, and CSS, which are crucial for front-end development. Additionally, my knowledge extends to Java and C++, gained from my Computer Science courses. Beyond coding, I have a firm grasp on other aspects of technology, including building computers and troubleshooting various tech issues.</p>
                    </div>

                    <div className="glass">
                        <h1 className="about-Title">Education.</h1>
                        <p className="about-Title-Desc"> 
                            - Delaware Technical Community College: Enrolled in 2020, completing coursework in 2023.
                            <br />
                            - University of Delaware: Attending from 2024 to 2025, pursuing a Bachelor's degree in Computer and Information Sciences. 
                        </p>
                    </div>


                    <div className="glass">
                        <h1 className="about-Title">Hobbies.</h1>
                        <p className="about-Title-Desc">Outside of my academic and professional interests, I am passionate about health and fitness. I believe in the importance of a balanced lifestyle, and I am currently preparing to compete in a natural bodybuilding show. This hobby not only keeps me physically fit but also instills discipline and perseverance, qualities that I believe are equally important in my professional life.</p>
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