import React from 'react';
import Lottie from 'lottie-react';
import './homePage.css';
import spaceBoy from '../../lottieFiles/space-boy.json';
import Typed from '../../components/Typed';
import Tilt from 'react-parallax-tilt';
import Avatar from '../../assets/images/Avatar.png';
import { CiCoffeeCup } from 'react-icons/ci';

const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <div className="home-text">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Sahil</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={spaceBoy} loop={true} />
      </div>

      <div className="about">
        <div className="about-desc">
          <h1 className="about-desc-heading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Web developer with a strong passion for creating innovative and
            visually appealing web solutions.
            <br />
            <br />I am proficient in <b>HTML</b>, <b>CSS</b>, <b>Javascript</b> and <b>React</b> and skilled in responsive interfaces, performance optimization, and user-centered design.
            <br />I plan to learn <b>Next.js</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{' '}
            <CiCoffeeCup style={{ scale: '1.5', rotate: '15deg' }} />
          </p>
        </div>
        <Tilt>
          <img className="avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default HomePage;
