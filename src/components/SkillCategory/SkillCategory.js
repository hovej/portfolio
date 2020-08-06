import React from 'react';

import Skill from './Skill/Skill';
import classes from './SkillCategory.module.css';

const SkillCategory = props => {
  const skills = props.skills.map(skill => (
    <Skill name={skill.skillName} time={skill.time} key={skill.skillName} />
  ))
  return (
    <div className={classes.Category}>
      <h3>{props.cat}</h3>
      {skills}
    </div>
  )
}

export default SkillCategory;