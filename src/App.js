import './App.css';
import profileImg from "./Assets/profile-image.png"
import linkedin from "./Assets/linkedin.png"
import github from "./Assets/github.png"
import resume from "./Assets/cv.png"
import { ProjectContainer } from './Components/ProjectContainer';
import { projectData } from './ProjectData';
import "./Reset.css"
import { useEffect } from 'react';
import { wakeApps } from './ApiCalls';
import { SkillsContainer } from './Components/SkillsContainer';
import { kaiData, learning } from './KaiData';

function App() {

  useEffect(() => {
    wakeApps()
  }, [])

  return (
    <div className="App">
        <h1>Hi, I am Kai. I am a Software Developer, and these are some of my projects...</h1>
      <header className="header">
        <h2>{"<="} About Me {"=>"}</h2>
        <br/>
        <p className="intro-paragraph">My journey in software development began in May 2021 when I had the opportunity to assist a friend in redesigning and building a website. This experience immediately captivated my interest, prompting me to delve deeper into the world of development. Determined to pursue my newfound passion, I enrolled in a rigorous, project-based program at Turing School of Software and Design, which spanned seven months. Throughout my time there, I honed my skills in Javascript and React, solidifying my dedication to software development.</p>
        <br/>
        <p className="intro-paragraph">Drawing from my background as a massage therapist and athlete, I have always embraced a body-centered and movement-focused approach. This mindset has equipped me with the ability to break down complex problems into manageable components, recognizing how each part contributes to the bigger picture. Moreover, my years of managing teams in the restaurant industry have imparted valuable lessons in interpersonal communication and the art of active listening.</p>
        <br/>
        <p className="intro-paragraph">Upon discovering software development, I discovered a remarkable synergy between my exceptional team management and communication skills, and my passion for problem-solving, code architecture, and tackling real-world issues. Please reach out if you would like to collaborate and foster mutual growth and success.</p>
        <br/>
        <h2>{"<="} Core Skills {"=>"}</h2>
        <br/>
        <SkillsContainer skills={kaiData.skills} />
      </header>
      <img className="scale-in-center" src={profileImg} />
      <br/>
      <h2>{"<="} Personal Projects {"=>"}</h2>
      <ProjectContainer projects={projectData} />
      <div className="links">
        <a className="logo-link" href="https://docs.google.com/document/d/1s3Shpq-MaMmYqJjFr17fXm05HFY7lIQS_9-Jv9tFn14/edit?usp=sharing">
          <img className="logo" src={resume} />
        </a>
        <a className="logo-link" href="https://www.linkedin.com/in/kai-kuller/">
          <img className="logo" src={linkedin}/>
        </a>
        <a className="logo-link" href="https://github.com/kavakai/">
          <img className="logo" src={github} />
        </a>
      </div>
    </div>
  );
}

export default App;
