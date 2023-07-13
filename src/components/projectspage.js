// projects.js
// src/components/projectspage.js
import React from 'react';
import '../assests/styles/projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import VaultWiseGif from '../assests/images/VaultWise.gif'

const projectData = [
  {
    title: 'VaultWise',
    description: 'Personal bankstatement tracker and AI assistant.',
    image: VaultWiseGif
  },
  {
    title: 'Project 2',
    description: 'This is a description for Project 2.',
    image: 'link-to-project-2-image.jpg'
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className='TitleProject'>Projects.</h1>
      <div className="row mx-auto">
        {projectData.map((project, index) => (
          <div className="col-12 col-md-6" key={index}>
            <div className="project-card mx-auto">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;