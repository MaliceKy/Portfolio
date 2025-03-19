// Importing necessary libraries and assets
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assests/styles/landing.css";
import { ReactComponent as LinkedInIcon } from '../assests/images/LinkedIn.svg';
import { ReactComponent as GitHubIcon } from '../assests/images/Github.svg';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';
import landingData from '../data/landing.json';

const LandingPage = () => {
  // State initialization
  const [clicked, setClicked] = useState({});
  const [redirect, setRedirect] = useState(null);
  
  // Setting up router navigation
  const navigate = useNavigate();

  // Handle social icon click events
  const handleSocialClick = (e, href, social) => {
    e.preventDefault();
    setClicked(prev => ({ ...prev, [social]: true }));
    setRedirect(href);
  };

  // Handle click effect and redirect for social icons
  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.open(redirect, '_blank');
        setClicked({});
        setRedirect(null);
      }, 600);
    } else if (Object.keys(clicked).length > 0) {
      setTimeout(() => {
        setClicked({});
      }, 600);
    }
  }, [redirect, clicked]);

  // Map for social icons
  const socialIcons = {
    'linkedin': LinkedInIcon,
    'github': GitHubIcon
  };

  // Rendered JSX
  return (
      <div className="container position-relative d-flex d-md-flex">

        {/* Side welcoming text */}
        <h1 className="Welcoming-verticalText-side d-none d-lg-block">{landingData.welcomeText}</h1>

          <div className="main-content">
            {/*Heading and introduction*/}
            <div className="title-container">
              <h1 className="Title">{landingData.title}</h1>
              <h1 className="Welcoming-verticalText-top d-md-flex d-lg-none">{landingData.welcomeText}</h1>
            </div>
            <p className="Title-Desc">{landingData.description}</p>
            
            {/*Social icon links*/}
            <div className="row">
              <div className="col-12">
                {landingData.socialLinks.map((social, index) => {
                  const SocialIcon = socialIcons[social.name];
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => handleSocialClick(e, social.apiUrl, social.name)}
                    >
                      <SocialIcon className={`social-icon ${social.name}-icon ${clicked[social.name] ? 'clicked' : ''}`} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/*Navigational buttons*/}
            <div className="buttonContainer">
              {landingData.navigation.map((nav, index) => {
                if (nav.isExternal) {
                  return (
                    <a 
                      key={index}
                      href={nav.to} 
                      className={`tabs ${clicked[nav.text] ? 'clicked' : ''}`}
                    >
                      <span className={`button-text ${clicked[`${nav.text}Text`] ? 'clicked' : ''}`}>{nav.text}</span>
                      <ArrowRightIcon className={`arrow ${clicked[`${nav.text}Button`] ? 'clicked' : ''}`} />
                    </a>
                  );
                } else {
                  return (
                    <Link 
                      key={index}
                      to={nav.to} 
                      className={`tabs ${clicked[nav.text] ? 'clicked' : ''}`} 
                      onClick={() => navigate(nav.to)}
                    >
                      <span className={`button-text ${clicked[`${nav.text}Text`] ? 'clicked' : ''}`}>{nav.text}</span>
                      <ArrowRightIcon className={`arrow ${clicked[`${nav.text}Button`] ? 'clicked' : ''}`} />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
      </div>
  );
};

export default LandingPage;