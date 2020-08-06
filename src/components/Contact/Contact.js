import React from 'react';

import classes from './Contact.module.css';
import FacebookLogo from '../../assets/FacebookLogo.png';
import GithubLogo from '../../assets/GithubLogo.png';
import LinkedinLogo from '../../assets/LinkedinLogo.png';

const Contact = props => {
  switch (props.site) {
    case 'facebook':
      return <a style={{margin: '10px'}} href={props.link} target='_blank' rel='noopener noreferrer'>
        <img className={classes.Contact} src={FacebookLogo} alt='Facebook logo' />
      </a>
    case 'github':
      return <a style={{margin: '10px'}} href={props.link} target='_blank' rel='noopener noreferrer'>
        <img className={classes.Contact} src={GithubLogo} alt='Github logo' />
      </a>
    case 'linkedin':
      return <a style={{margin: '10px'}} href={props.link} target='_blank' rel='noopener noreferrer'>
        <img className={classes.Contact} src={LinkedinLogo} alt='LinkedIn logo' />
      </a>
    default:
      break;
  }
}

export default Contact;