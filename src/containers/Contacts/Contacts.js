import React from 'react';

import classes from './Contacts.module.css';
import Contact from '../../components/Contact/Contact';

class Contacts extends React.Component {
  state = {
    contacts: [
      {
        name: 'github',
        link: 'https://www.github.com/hovej'
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/justin-hove'
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/justin.hove.3'
      }
    ]
  }

  render() {
    const contactList = this.state.contacts.map(contact => (
      <Contact key={contact.name} site={contact.name} link={contact.link} />
    ))

    return (
      <div className={classes.Screen}>
        <h1>Contact</h1>
        <p><strong>Email: </strong>hovej88@gmail.com</p>
        <p><strong>Phone: </strong>(513) 518-6168</p>
        <br />
        <p>Feel free to contact me at any of the links below!</p>
        <div className={classes.Contacts}>
          {contactList}
        </div>
        <a href='#top'>Return to top</a>
      </div>
    )
  }
}

export default Contacts;