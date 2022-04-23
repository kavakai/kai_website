import './App.css';
import image from "./Assets/IMG_2175.JPG"
import linkedin from "./Assets/linkedin.png"
import github from "./Assets/github.png"
import resume from "./Assets/cv.png"
import { ProjectContainer } from './Components/ProjectContainer';
import { projectData } from './ProjectData';
import "./Reset.css"

function App() {

  return (
    <div className="App">
        <h1>Hi, I am Kai and these are some of my projects...</h1>
      <header className="header">
        <h2>About Me {"=>"}</h2>
        <br/>
        <p className="intro-paragraph">I am a software developer by trade and a father, partner, friend, adventurer, etc. by choice</p>
        <br/>
        <p className="intro-paragraph">I am super excited about taking my experience from my former careers in customer service and massage, and using those talents to further my evolution as a human in the ever changing field of software development. I have a strong passion for connecting with others, an easy-going attitude, and I can adapt to many situations and teams. I believe the skills I have acquired from my former careers make me an ideal member for any team/family in development. I am very eager and excited to join a diverse team looking to help change the future.</p>
      </header>
      <img className="scale-in-center" src={image} />

      <h2>Personal Projects {"=>"}</h2>
      <ProjectContainer projects={projectData} />
      <div className="links">
        <a className="logo-link" href="https://docs.google.com/document/d/1MpBVSinj4yx3Xd174NhsHVwYGfySZrqdSeZrrPgVRrI/edit?usp=sharing">
          <img className="logo" src={resume} />
        </a>
        <a className="logo-link" href="www.linkedin.com/in/kai-kuller">
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
