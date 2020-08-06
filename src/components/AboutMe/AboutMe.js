import React from 'react';

import classes from './AboutMe.module.css';
import ProfilePic from '../../assets/Profile.png';

const AboutMe = props => (
  <div className={classes.Screen}>
    <h1 style={{marginTop: '75px'}}>About Me</h1>
    <div className={classes.Main}>
      <p style={{textAlign: 'justify', fontSize: '145%'}}><img className={classes.Image} src={ProfilePic} alt='Justin Hove' />Welcome! My name is Justin Hove. I started my adventure into website development at the end of summer in 2019. 
        As a self-taught developer, I have been forced to be determined and committed to reach my goals and only plan to 
        improve upon those attributes. I have experienced a wide variety of career paths, including teaching, manual labor, 
        and the US military, but nothing has captivated my interest like website development. One year later, I'm still excited
        to learn and improve every day. I look forward to expanding my knowledge and meeting some fantastic
        people along the way!</p>
    </div>
  </div>
)

export default AboutMe;