import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Sarthak Bansal, a Sophomore majoring in Computer Science at
          the{' '}
          <a className="about__link" href="https://umass.edu">
            University of Massachusetts Amherst
          </a>{' '}
          . I have a passion for software and web development and love to code during free time. I can work independently and also am team player with ability to multitask; fast learner with basic knowledge of Python, C, and MongoDB. I am fluid in HTML/CSS, Java, and JavaScript with a good knowledge of Data Structures and Algorithms.
          <br />
          <br />I am passionate about neat design and I'm always looking for ideas to build and prototype. If you share the same passion, feel free to get in touch.
          <br />
          <br /><i>I am actively looking for an internship in Summer 2022.</i>
        </p>
      </AboutInfo>

    </AboutWrapper>
  );
};

export default About;
