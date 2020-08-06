import React from 'react';

import Title from './components/TitlePage/TitlePage';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Contacts from './containers/Contacts/Contacts';

function App() {
  return (
    <div>
      <Title />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
