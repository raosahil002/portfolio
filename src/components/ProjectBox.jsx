import React from 'react';
import '../pages/project/projectPage.css'
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AmazonDesc : "This website is a E-Commerce web app. It is MERN stack and fully responsive website. It has Login, Signup using JWT tokens and checkout page to buy products and we can also search across whole app and payment gateway integration using RazorPay.",
    AmazonGithub : "https://github.com/DikshitY/E-Commerce",
    AmazonWebsite : "https://e-commerce-client-wheat.vercel.app/",

    EntertainmentDesc : "A website that shows you the trending and new movies and series. You can bookmark the movies and series. This project was made to understand the JSON server.",
    EntertainmentGithub : "https://github.com/DikshitY/Entertainment-web-page",
    EntertainmentWebsite : "https://entertainment-web-page.vercel.app/",

    // QuizzicalDesc:"A Quiz site where you can start quiz and test your knowledge. You would me marked for wrong and correct answers and you can always start a new quiz.",
    // QuizzicalGithub:"https://github.com/DikshitY/Quizzical-App",
    // QuizzicalWebsite:"https://quizzical-app-chi.vercel.app/",
    
    WhereIsMyCountryDesc:"A site to search for different countries with filter according to the region. This project was made to understand API integration, filering and searching in React.",
    WhereIsMyCountryGithub:"https://github.com/DikshitY/rest-country",
    WhereIsMyCountryWebsite:"https://rest-country-dikshity.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='project-box'> 
        <img className='project-img' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='project-btn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='project-btn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox