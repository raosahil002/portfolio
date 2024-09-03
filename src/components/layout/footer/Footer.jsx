import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sahil</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className="footer-links">
        <a href="https://github.com/raosahil002" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sahil-rao002" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:raosahil002@gmail.com" target="_blank">
          <GrMail />
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
