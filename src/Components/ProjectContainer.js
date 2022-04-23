import React from "react";
import { Project } from "./Project";
import "./ProjectContainer.css"

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
    <section className="proj-container">
      {projectCards}
    </section>
  )
}