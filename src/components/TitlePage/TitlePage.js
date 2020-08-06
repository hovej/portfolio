import React from 'react';

import classes from './TitlePage.module.css';

const TitlePage = props => {
  return (
    <div id='top' className={classes.Screen}>
      <div>
        <h1 className={classes.Title}>Justin Hove</h1>
        <h3 className={classes.Subtitle}>An up and coming React developer</h3>
      </div>
    </div>
  )
}

export default TitlePage;