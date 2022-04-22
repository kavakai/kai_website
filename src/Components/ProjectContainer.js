import React from "react";
import { Project } from "./Project";

export const ProjectContainer = ({ projects }) => {

  const projectCards = projects.map(proj => {
    return <Project
      title={proj.title}
    />
  }) 
  return (
    <div>
      <h3>{projectCards}</h3>
    </div>
  )
}