import React, { useState, useEffect } from 'react';

import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      _id: '1',
      title: ' IPL League Website (Web Development Project)',
      description: 'Created and deployed a user-friendly interface using HTML, CSS and JavaScript, Engineered backend functionalities using PHP and MYSQL for Data Base Management System.',
    },
    {
      _id: '2',
      title: ' ISmart Irrigation System (I.O.T Project)',
      description: 'Developed Smart Irrigation System Using Some Sensors and Arduino Nano.',
    },
  ]);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
