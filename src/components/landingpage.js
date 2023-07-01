import React, { useState, useEffect } from 'react';
import "../assests/styles/LandingPage.css";
import { ReactComponent as LinkedInIcon } from '../assests/images/LinkedIn.svg';
import { ReactComponent as GitHubIcon } from '../assests/images/Github.svg';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';

const LandingPage = () => {
  const [clicked, setClicked] = useState({});
  const [redirect, setRedirect] = useState(null);

  const handleSocialClick = (e, href, social) => {
    e.preventDefault();
    setClicked(prev => ({ ...prev, [social]: true }));
    setRedirect(href);
  };

  const handleButtonClick = (e, button, text) => {
    e.preventDefault();
    setClicked(prev => ({ ...prev, [button]: true, [text]: true }));
    // Code for handling button click goes here
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
        <div className="hello-container position-absolute w-100 d-block d-md-none">
          <div className="hello">Hello I'm</div>
        </div>
        <div className="hello-container d-none d-md-block">
          <div className="hello">Hello I'm</div>
        </div>
        <div className="main-content position-relative">
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
            <button href="#" className={`tabs ${clicked['about'] ? 'clicked' : ''}`} onClick={(e) => handleButtonClick(e, 'aboutButton', 'aboutText')}>
              <span className={`button-text ${clicked['aboutText'] ? 'clicked' : ''}`}>More About Me.</span>
              <ArrowRightIcon className={`arrow ${clicked['aboutButton'] ? 'clicked' : ''}`} />
            </button>
            <button href="#" className={`tabs ${clicked['projects'] ? 'clicked' : ''}`} onClick={(e) => handleButtonClick(e, 'projectsButton', 'projectsText')}>
              <span className={`button-text ${clicked['projectsText'] ? 'clicked' : ''}`}>Past Projects.</span>
              <ArrowRightIcon className={`arrow ${clicked['projectsButton'] ? 'clicked' : ''}`} />
            </button>
            <button href="#" className={`tabs ${clicked['contact'] ? 'clicked' : ''}`} onClick={(e) => handleButtonClick(e, 'contactButton', 'contactText')}>
              <span className={`button-text ${clicked['contactText'] ? 'clicked' : ''}`}>Contact.</span>
              <ArrowRightIcon className={`arrow ${clicked['contactButton'] ? 'clicked' : ''}`} />
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;