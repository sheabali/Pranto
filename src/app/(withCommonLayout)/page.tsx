import About from '@/pages/Home/About/About';
import Banner from '@/pages/Home/Banner/Banner';
import Contact from '@/pages/Home/Contact/Contact';
// import ExperienceTimeline from '@/pages/Home/Experience/ExperienceTimeline';
import Project from '@/pages/Home/Project/Project';
import Skills from '@/pages/Home/Skills/Skills';

import React from 'react';

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <Skills />
      <About />
      {/* <ExperienceTimeline /> */}
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;
