// src/components/projectspage.js
import React, { useState } from 'react';
import '../assests/styles/projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import VaultWiseVideo from '../assests/videos/VaultWise.webm'
import ParkingPanicVideo from '../assests/videos/ParkingPanic.webm'
import { ReactComponent as GitHubIcon } from '../assests/images/Github.svg';
import { ReactComponent as Linkout } from '../assests/images/link-out.svg';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';

const projectData = [
  {
    title: 'VaultWise',
    description: 'Personal bankstatement tracker and AI assistant.',
    descriptionExtended: (
      <>
        VaultWise is a personal bank statement tracker and emerging AI assistant. Built using React, JavaScript, and CSS, it delivers a seamless experience across devices. Users can securely sign in or explore as guests. Once in, VaultWise analyzes uploaded bank statements, summarizing income, expenses, and transactions. A dynamic graph displays monthly bank balance trends. Under development is an AI toolbox, leveraging GPT 3.5 Turbo, designed to guide users toward financial goals. Ultimately, VaultWise aims to make finance management simpler, insightful, and interactive. A fake bankstatement csv file is provided for the full VaultWise experience. 
        <br />
        <a className="CSVdownload" href="/VaultWiseExampleCSV.csv" download>Download CSV</a>
      </>
    ),
    video: VaultWiseVideo,
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/MaliceKy/VaultWise-Expense-AI-project',
    liveDemoLink: 'http://vaultwise.kylemalice.info/'
  },
  {
    title: 'Parking Panic',
    description: 'Fast-paced, top-down pixel art web game.',
    descriptionExtended: (
      <>
        Parking Panic is a web-based, top-down pixel art parking simulator developed collaboratively with a group of friends. The game is built entirely using JavaScript, HTML, and CSS. I was responsible for implementing the car's movement mechanics, collision detection, dynamic resizing of the game, and designing various assets such as obstacles and animations. The objective of the game is to navigate through an increasingly challenging map without losing all your lives by crashing into obstacles. Players progress through infinite rounds by dodging hazards and successfully parking in a randomized parking spot that glows on the map.
        <br /><br />
        The game features two difficulty modes: Easy and Hard. In Easy mode, players have more lives, which reset each round, and face slower speeds with fewer obstacles. In contrast, Hard mode limits players to 3 lives that do not reset between rounds, along with higher speeds and a greater number of obstacles to avoid. The game tests players' reflexes and precision as they strive to reach higher rounds and perfect their parking skills.
      </>
    ),
    video: ParkingPanicVideo,
    technologies: ['Javascript', 'HTML', 'CSS'],
    github:'https://github.com/MaliceKy/Parking-Panic',
    liveDemoLink: '...'
  },
];

const ExpandedProject = ({ project, onClose, closing }) => {
  if (!project) return null;

  return (
    <div className={`projectOverlay ${closing ? 'closing' : ''}`} onClick={onClose}>
      <div className="ProjectContainer">
        <div className="row justify-content-center">
          <div className={`col-12 col-md-5 expanded-project ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>Projects 
              <ArrowRightIcon className={`arrow`} />
            </button>
            <div className="project-contents">
            <h2>{project.title}</h2>
            <video src={project.video} autoPlay loop muted playsInline className="project-video">
              Your browser does not support the video tag.
            </video>
            <div className="DescriptionContainer">
              <h3>Description:</h3>
              <p>{project.descriptionExtended}</p>
            </div>
            <div className="TechnologyContainer">
              <h3>Technologies:</h3>
              <div className="projectTechnologiesExt">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tech">{tech}</span>
                ))}
              </div>
            </div>
            <div className='projectSourceLinksContainer'>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="projectLinkedGithub">
                <div className='linkContainerGithub'>
                  <h4><GitHubIcon className={`git-icon`}/>Github</h4>
                </div>
              </a>
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="projectLinkedLiveDemo" onClick={(e) => e.stopPropagation()}>
                <div className='linkContainerLiveDemo'>
                  <h4><Linkout className={`link-out`}/>Live Demo</h4>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setClosing(false);
    }, 275);
  };

  return (
    <div className="ProjectsPage">
      <h1 className='TitleProject'>Projects.</h1>

      <h1 className="project-verticalText-top w-100 d-md-none">Projects.</h1>
      <h1 className="project-verticalText-side d-none d-md-block">Projects.</h1>

      <div className="row mx-auto">
        {projectData.map((project, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div className="project-card mx-auto" onClick={() => setSelectedProject(project)}>
              <div className="project-image">
                <video src={project.video} autoPlay loop muted playsInline className="project-video">
                Your browser does not support the video tag.
              </video>
                <div className="project-info">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-container">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ExpandedProject
        project={selectedProject}
        onClose={handleClose}
        closing={closing}
      />
    </div>
  );
};

export default Projects;