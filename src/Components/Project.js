import React from "react";
import "./Project.css"

export const Project = ({ title, info, liveLink, github, image, backend }) => {
  return (
    <article className="proj-card">
      <h2>{title}</h2>
      <img className="scale-in-center" src={image} />
      <p>{info}</p>
      <a href={liveLink} target="_blank">Link to Project</a>
      <a href={github} target="_blank">Github</a>
      {backend && <a href={backend}>Server Repo</a>}
    </article>
  )
}