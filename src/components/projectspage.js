// src/components/projectspage.js
import React, { useState } from 'react';
import '../assests/styles/projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import VaultWiseGif from '../assests/images/VaultWise.gif'

const projectData = [
  {
    title: 'VaultWise',
    description: 'Personal bankstatement tracker and AI assistant.',
    image: VaultWiseGif,
    technologies: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Project 2',
    description: 'This is a description for Project 2.',
    image: VaultWiseGif,
    technologies: ['React', 'CSS']
  },
];

const ExpandedProject = ({ project, onClose, closing }) => {
  if (!project) return null;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className={`col-12 col-md-5 expanded-project ${closing ? 'closing' : ''}`}>
          <button className="close-button" onClick={onClose}>X</button>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div>
            {project.technologies.map((tech, i) => (
              <span key={i} className="project-tech">{tech}</span>
            ))}
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
    }, 500); // Delay should be equal to the duration of your CSS transition
  };

  return (
    <div>
      <h1 className='TitleProject'>Projects.</h1>

      <h1 className="project-verticalText-top w-100 d-md-none">Projects.</h1>
      <h1 className="project-verticalText-side d-none d-md-block">Projects.</h1>

      <div className="row mx-auto">
        {projectData.map((project, index) => (
          <div className="col-12 col-lg-6" key={index}>
            <div className="project-card mx-auto" onClick={() => setSelectedProject(project)}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
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