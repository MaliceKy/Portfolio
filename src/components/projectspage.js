// src/components/projectspage.js
import React, { useState } from 'react';
import '../assests/styles/projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ReactComponent as GitHubIcon } from '../assests/images/Github.svg';
import { ReactComponent as Linkout } from '../assests/images/link-out.svg';
import { ReactComponent as ArrowRightIcon } from '../assests/images/angle-small-right.svg';
import projectsData from '../data/projects.json';

// Import videos directly
import VaultWiseVideo from '../assests/videos/VaultWise.webm';
import ParkingPanicVideo from '../assests/videos/ParkingPanic.webm';
import FureverHomeVideo from '../assests/videos/FureverHome.webm';

// Create a mapping from video IDs to video files
const videoMap = {
  'VaultWise': VaultWiseVideo,
  'ParkingPanic': ParkingPanicVideo,
  'FureverHome': FureverHomeVideo
};

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
            <video src={videoMap[project.videoId]} autoPlay loop muted playsInline className="project-video">
              Your browser does not support the video tag.
            </video>
            <div className="DescriptionContainer">
              <h3>Description:</h3>
              <p>
                {project.descriptionExtended.split('\n\n').map((paragraph, idx) => (
                  <React.Fragment key={idx}>
                    {paragraph}
                    {idx < project.descriptionExtended.split('\n\n').length - 1 && <><br /><br /></>}
                  </React.Fragment>
                ))}
              </p>
              {project.hasDownload && (
                <a className="CSVdownload" href={project.downloadLink} download>{project.downloadText}</a>
              )}
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
      <h1 className='TitleProject'>{projectsData.pageTitle}</h1>

      <h1 className="project-verticalText-top w-100 d-md-none">{projectsData.pageTitle}</h1>
      <h1 className="project-verticalText-side d-none d-md-block">{projectsData.pageTitle}</h1>

      <div className="row mx-auto">
        {projectsData.projects.map((project, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div className="project-card mx-auto" onClick={() => setSelectedProject(project)}>
              <div className="project-image">
                <video src={videoMap[project.videoId]} autoPlay loop muted playsInline className="project-video">
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