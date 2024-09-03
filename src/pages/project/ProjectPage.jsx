import React from 'react';
import './projectPage.css';
import ProjectBox from '../../components/ProjectBox';
import ECommerceImage from '../../assets/images/e-commerce.png';
import EntertainmentImage from '../../assets/images/entertainment.png';
// import QuizzicalImage from '../../assets/images/quizzical.png';
import CountryImage from '../../assets/images/country.png';

const ProjectPage = () => {
  return (
    <div>
      <h1 className="project-heading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={ECommerceImage} projectName="Amazon" />
        <ProjectBox projectPhoto={EntertainmentImage} projectName="Entertainment" />
        {/* <ProjectBox projectPhoto={QuizzicalImage} projectName="Quizzical" /> */}
        <ProjectBox projectPhoto={CountryImage} projectName="WhereIsMyCountry" />
      </div>
    </div>
  );
};

export default ProjectPage;
