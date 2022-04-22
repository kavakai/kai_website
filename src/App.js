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
      <img src={image} />

      <h2>Personal Projects {"=>"}</h2>
      <ProjectContainer projects={projectData}/>
    </div>
  );
}

export default App;
