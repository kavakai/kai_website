import React from "react";
import { Project } from "./Project";

export const ProjectContainer = ({ projects }) => {

  const projectCards = projects.map(proj => {
    
    return <Project
      key={proj.title}
      title={proj.title}
      info={proj.info}
      liveLink={proj.liveLink}
      github={proj.github}
      image={proj.image}
      backend={proj.serverRepo && proj.serverRepo}
    />
  }) 
  return (
    <div>
      <h3>{projectCards}</h3>
    </div>
  )
}