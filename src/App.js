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
        <h1>Hi, I am Kai and these are some of my projects...</h1>
      <header className="header">
        <h2>{"<="} About Me {"=>"}</h2>
        <br/>
        <p className="intro-paragraph">I am a software developer by trade and a father, partner, friend, adventurer, etc. by choice.</p>
        <br/>
        <p className="intro-paragraph">I started my journey in software development in May of 2021 when I helped a friend redesign  and build a website. I was immediately intrigued and decided to pursue my newfound passion for development by entering a 7 month intensive, project-based program. During my time at Turing School of Software and Design I became very proficient in Javascript and React, and solidified my passion for software development.</p>
        <br/>
        <p className="intro-paragraph">
        As a massage therapist and athlete, I have always been body-centered and movement focused. I have learned how to break down large problems into smaller parts, and see how each part plays into the big picture. I spent many years managing teams in the restaurant industry, and have learned a lot about interpersonal communication and the amazing skill of truly listening. Once I found software development, I was able to merge my outstanding ability to manage and communicate within teams, and my passion for problem solving, code architecture, and solving real-world problems. Given the opportunity, I would love to bring my skillset to your company and help both you and I continue to grow.</p>
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
        <a className="logo-link" href="https://docs.google.com/document/d/1MpBVSinj4yx3Xd174NhsHVwYGfySZrqdSeZrrPgVRrI/edit?usp=sharing">
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
