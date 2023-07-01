import React from 'react';
import "../assests/styles/LandingPage.css";
import { ReactComponent as LinkedInIcon } from '../assests/images/LinkedIn.svg';
import { ReactComponent as GitHubIcon } from '../assests/images/Github.svg';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';


const LandingPage = () => {

  

  // Define the click handler function
  const handleClick = (e) => {
    e.preventDefault();

    // Add the 'clicked' class to the clicked element
    e.currentTarget.classList.add('clicked');

    // Remove the class after the animation duration (in this case, 1s)
    setTimeout(() => {
      e.currentTarget.classList.remove('clicked');
    }, 400);
  };

  return (
    <div className="background"> {/* Background */}
      <div className="container position-relative">
        {/* 'Hello I'm' for small screens */}
        <div className="hello-container position-absolute w-100 d-block d-md-none">
          <div className="hello">Hello I'm</div>
        </div>
        {/* 'Hello I'm' for larger screens */}
        <div className="hello-container d-none d-md-block">
          <div className="hello">Hello I'm</div>
        </div>
        <div className="main-content position-relative"> {/* Main Contents */}
          <div className="content-container">
            <h1 className="Title">Kyle Malice</h1>
            <p className="Title-Desc">Web development enthusiast, proficient in JavaScript, CSS, HTML, and React, pursuing a Bachelor's in Computer Science. Ambitious, challenge-seeking, and eager to innovate in the dynamic web industry. Simple, direct, future-focused. Let's connect.</p>
            <row>
              <div className="col-12">
                <LinkedInIcon onClick={handleClick} className="social-icon linkedin-icon" />
                <GitHubIcon onClick={handleClick} className="social-icon github-icon" />
              </div>
            </row>
            <div className="buttonContainer"> {/* Buttons */}
              <button href="#" className="tabs" onClick={handleClick}>
                More About Me.
                <ArrowRightIcon className="arrow" />
              </button>
              <button href="#" className="tabs" onClick={handleClick}>
                Past Projects.
                <ArrowRightIcon className="arrow" />
              </button>
              <button href="#" className="tabs" onClick={handleClick}>
                Contact.
                <ArrowRightIcon className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
    
};
export default LandingPage;

