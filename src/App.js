import './App.css';
import image from "./Assets/IMG_2175.JPG"
import { ProjectContainer } from './Components/ProjectContainer';
import { projectData } from './ProjectData';

function App() {

  return (
    <div className="App">
      <h1>Hi, I am Kai and these are some of my projects...</h1>
      <h2>About Me {"=>"}</h2>
      <p>I am a software developer by trade and a father, partner, friend, adventurer, etc. by choice</p>
      <p>I am super excited about taking my experience from my former careers in customer service and massage, and using those talents to further my evolution as a human in the ever changing field of software development. I have a strong passion for connecting with others, an easy-going attitude, and I can adapt to many situations and teams. I believe the skills I have acquired from my former careers make me an ideal member for any team/family in development. I am very eager and excited to join a diverse team looking to help change the future.</p>
      <img className="scale-in-center" src={image} />

      <h2>Personal Projects {"=>"}</h2>
      <ProjectContainer projects={projectData} />
      <div className="links">
        <a href="https://docs.google.com/document/d/1MpBVSinj4yx3Xd174NhsHVwYGfySZrqdSeZrrPgVRrI/edit?usp=sharing">Resume</a>
        <a href="www.linkedin.com/in/kai-kuller">
          <img src="../Assets/linkedin.png"/>
        </a>
        <a href="https://github.com/kavakai/">Github</a>
      </div>
    </div>
  );
}

export default App;
