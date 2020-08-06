import React from 'react';

import classes from './Project.module.css';

const Project = props => {
  return (
    <div style={{width: '30%', margin: 'auto'}}>
    <a href={props.details.link} style={{textDecoration: 'none', color: 'black', width: '150px', backgroundColor: 'red'}}>
      <div className={classes.Project}>
        <h1>{props.details.name}</h1>
        <p>{props.details.description}</p>
      </div>
    </a>
    </div>
  )
}

export default Project;