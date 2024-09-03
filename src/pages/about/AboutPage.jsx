import React from 'react';
import './aboutPage.css';
import Skills from '../../components/Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import coder from '../../lottieFiles/coder.json';

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-text">
          <h1 className="about-text-heading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, My name is <b>Sahil</b> and I am from Gurugram, India. I'm a{' '}
            <b>MERN stack web developer</b> and a <b>B.Tech</b>{' '}
            graduate. <br />
            <br />
            Completed diverse projects, including dynamic web applications.
            Dedicated to staying up-to-date with latest industry trends and
            technologies to deliver cutting-edge solutions.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to play video games.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="skills-heading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Tailwind" />
        <Skills skill="Postman" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        
      </div>
    </>
  );
};

export default AboutPage;
