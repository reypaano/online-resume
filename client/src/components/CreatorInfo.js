import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {AiTwotoneMail} from "react-icons/ai"
import Picture from '../images/Prof-pic.JPG'

function CreatorInfo() {
  return (
    <div className="creato-info">
      <div className="about">
      <img src={Picture} alt="Avatar"/>
        <h2> Hi, My Name is Rey Anthony</h2>
        <div className="prompt">
          <p>A software and web developer with a passion for learning and creating.</p>
          <BsLinkedin />
          <AiTwotoneMail />
          <BsGithub />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              EXTJS, ReactJS, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, SASS, StyledComponents, knowledge in 
              Vue.js
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java, PHP - CodeIgniter , ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, PostgreSQL, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, PHP, basic knowledge in Python</span>
          </li>

          <li className="item">
            <h2>Tools</h2>
            <span>WordPress,VS Code, Unity Game Engine, J-Creator, Dev-C,
                Android Studio, Postman API, GCP, AWS Cloud, GIT,
                Jenkins, Docker, Compute Engine, Kubernetes
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default CreatorInfo;