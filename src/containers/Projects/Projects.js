import React from 'react';

import classes from './Projects.module.css';
import Project from '../../components/Project/Project';

class Projects extends React.Component {
  state = {
    projects: [
      {
        name: 'React Chat',
        description: 'A messaging site built in React using Firebase to handle data storage.',
        link: 'https://hovej.github.io/react-chat'
      },
      {
        name: 'Aim Trainer',
        description: 'An aim trainer made in React with multiple modes to practice different aspects of mouse control.',
        link: 'https://codepen.io/hovej/full/bGdKmEm'
      },
      {
        name: 'Space Shooter',
        description: 'A timeless classic made with Javascript and jQuery. Blast your enemies as long as you can!',
        link: 'https://hovej.github.io/space-shooter'
      }
    ]
  }

  render() {
    const projects = this.state.projects.map(proj => (
      <Project key={proj.name} details={{ ...proj }} />
    ))

    return (
      <div className={classes.Screen}>
        <h1>Projects</h1>
        <p style={{width: '40%', margin: 'auto'}}>Below is a collection of several of my completed projects, large and small, with links for you to try them out yourself!</p>
        <div className={classes.Projects}>
          {projects}
        </div>
      </div>
    )
  }
}

export default Projects;