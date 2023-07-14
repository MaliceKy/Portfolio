// src/components/landingpage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assests/styles/landing.css";
import { ReactComponent as LinkedInIcon } from '../assests/images/LinkedIn.svg';
import { ReactComponent as GitHubIcon } from '../assests/images/Github.svg';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';

const LandingPage = () => {
  const [clicked, setClicked] = useState({});
  const [redirect, setRedirect] = useState(null);
  const navigate = useNavigate();

  const handleSocialClick = (e, href, social) => {
    e.preventDefault();
    setClicked(prev => ({ ...prev, [social]: true }));
    setRedirect(href);
  };

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

  return (
    <div className="background">
      <div className="container position-relative">
          <div className="content-container">
            <h1 className="Title">Kyle Malice</h1>
            <p className="Title-Desc">Web development enthusiast, proficient in JavaScript, CSS, HTML, and React, pursuing a Bachelor's in Computer Science. Ambitious, challenge-seeking, and eager to innovate in the dynamic web industry. Simple, direct, future-focused. Let's connect.</p>
            <div className="row">
              <div className="col-12">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" onClick={(e) => handleSocialClick(e, 'https://www.linkedin.com', 'linkedin')}>
                  <LinkedInIcon className={`social-icon linkedin-icon ${clicked['linkedin'] ? 'clicked' : ''}`} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" onClick={(e) => handleSocialClick(e, 'https://www.github.com', 'github')}>
                  <GitHubIcon className={`social-icon github-icon ${clicked['github'] ? 'clicked' : ''}`} />
                </a>
              </div>
            </div>
            
            <div className="buttonContainer">
              <Link to="/about" className={`tabs ${clicked['about'] ? 'clicked' : ''}`} onClick={() => navigate('/about')}>
                <span className={`button-text ${clicked['aboutText'] ? 'clicked' : ''}`}>More About Me.</span>
                <ArrowRightIcon className={`arrow ${clicked['aboutButton'] ? 'clicked' : ''}`} />
              </Link>
              <Link to="/projects" className={`tabs ${clicked['projects'] ? 'clicked' : ''}`} onClick={() => navigate('/projects')}>
                <span className={`button-text ${clicked['projectsText'] ? 'clicked' : ''}`}>Past Projects.</span>
                <ArrowRightIcon className={`arrow ${clicked['projectsButton'] ? 'clicked' : ''}`} />
              </Link>
              <a href="mailto:Malice.Kyle@gmail.com" className={`tabs ${clicked['contact'] ? 'clicked' : ''}`}>
                <span className={`button-text ${clicked['contactText'] ? 'clicked' : ''}`}>Get In Contact.</span>
                <ArrowRightIcon className={`arrow ${clicked['contactButton'] ? 'clicked' : ''}`} />
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;

