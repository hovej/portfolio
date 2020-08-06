import React from 'react';

import classes from './Skills.module.css';
import SkillCategory from '../../components/SkillCategory/SkillCategory';

class Skills extends React.Component {
  state = {
    categories: [
      {
        catName: 'Experienced',
        skills: [
          {
            skillName: 'React',
            time: '8 Months'
          },
          {
            skillName: 'Javascript',
            time: '1 Year'
          },
          {
            skillName: 'HTML5/CSS3',
            time: '1 Year'
          }
        ]
      },
      {
        catName: 'Familiar',
        skills: [
          {
            skillName: 'jQuery',
            time: '4 Months'
          },
          {
            skillName: 'Version Control/Git',
            time: '9 Months'
          }
        ]
      },
      {
        catName: 'Learning',
        skills: [
          {
            skillName: 'MongoDB',
            time: '< 1 Month'
          },
          {
            skillName: 'Redux',
            time: '< 1 Month'
          }
        ]
      }
    ]
  }

  render() {
    const categories = this.state.categories.map(cat => (
      <SkillCategory key={cat.catName} cat={cat.catName} skills={cat.skills} />
    ))

    return (
      <div className={classes.Screen}>
        <h1 style={{marginBottom: '50px'}}>Skillset</h1>
        {categories}
      </div>
    )
  }
}

export default Skills;