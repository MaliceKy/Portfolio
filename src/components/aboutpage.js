// About.js
import React, { useState } from 'react';
import '../assests/styles/about.css'
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';
import aboutData from '../data/about.json';
import config from '../data/config.json';

// Reusable InfoSection component for better maintainability
const InfoSection = ({ title, children }) => (
  <div className="glass">
    <h1 className="about-Title">{title}</h1>
    <p className="about-Title-Desc">
      {children.split('\n').map((text, index) => (
        <React.Fragment key={index}>
          {text}
          {index < children.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  </div>
);

// Navigation link component for consistency
const NavLink = ({ to, text, isExternal = false, isNewTab = false, clicked, onClick }) => {
  if (isExternal) {
    return (
      <a 
        href={to} 
        className={`tabs ${clicked ? 'clicked' : ''}`} 
        target={isNewTab ? "_blank" : "_self"}
        rel={isNewTab ? "noopener noreferrer" : ""}
      >
        <span className={`button-text ${clicked ? 'clicked' : ''}`}>{text}</span>
        <ArrowRightIcon className={`arrow ${clicked ? 'clicked' : ''}`} />
      </a>
    );
  }
  
  return (
    <Link to={to} className={`tabs ${clicked ? 'clicked' : ''}`} onClick={onClick}>
      <span className={`button-text ${clicked ? 'clicked' : ''}`}>{text}</span>
      <ArrowRightIcon className={`arrow ${clicked ? 'clicked' : ''}`} />
    </Link>
  );
};

const About = () => {
    const [clicked] = useState({});
    const navigate = useNavigate();

    // Create the resume URL from config
    const resumeUrl = `/${config.resume.filename}-${config.resume.year}.${config.resume.extension}`;
    const emailUrl = `mailto:${config.contact.email}`;

    // Process navigation items to replace placeholders
    const processedNavigation = aboutData.navigation.map(item => {
      let processedItem = {...item};
      
      if (item.to === "RESUME_URL_PLACEHOLDER") {
        processedItem.to = resumeUrl;
      } else if (item.to === "EMAIL_PLACEHOLDER") {
        processedItem.to = emailUrl;
      }
      
      return processedItem;
    });

    return (
        <div className="about-background">
            <div className="about-container position-relative">
                {/* Mobile title */}
                <div className="about-hello-container position-absolute w-100 d-block d-md-none">
                    <div className="about-hello">{aboutData.pageTitle}</div>
                </div>
                
                {/* Desktop title */}
                <div className="about-hello-container d-none d-md-block">
                    <div className="about-hello">{aboutData.pageTitle}</div>
                </div>
                
                <div className="about-main-content position-relative">
                    <div className="about-content-container">
                        {/* Map through the sections data */}
                        {Object.values(aboutData.sections).map((section, index) => (
                            <InfoSection 
                                key={index} 
                                title={section.title}
                            >
                                {section.content}
                            </InfoSection>
                        ))}

                        <div className="about-buttonContainer">
                            {processedNavigation.map((navItem, index) => (
                                <NavLink 
                                    key={index}
                                    to={navItem.to}
                                    text={navItem.text} 
                                    clicked={clicked[navItem.to]} 
                                    onClick={!navItem.isExternal ? () => navigate(navItem.to) : undefined}
                                    isExternal={navItem.isExternal}
                                    isNewTab={navItem.isNewTab || false}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;