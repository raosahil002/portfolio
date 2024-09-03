import React from 'react';
import '../pages/about/aboutPage.css'
import { CgCPlusPlus } from 'react-icons/cg';
import { SiTailwindcss } from "react-icons/si";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from 'react-icons/fa';
import { DiNodejs, DiJavascript1 } from 'react-icons/di';
import { SiExpress, SiMongodb, SiPostman, SiVercel} from 'react-icons/si';

const Skills = ({ skill }) => {
  const icon = {
    Tailwind: <SiTailwindcss />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    
  };

  return (
    <div title={skill} className="skill-box">
      {icon[skill]}
    </div>
  );
};

export default Skills;
