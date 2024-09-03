import React from 'react';
import Typewriter from 'typewriter-effect';
import '../pages/home/homePage.css'

const Typed = () => {
  return (
    <div className="type-effect">
      <Typewriter
        options={{
          strings:  ['Web Developer', 'React Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
