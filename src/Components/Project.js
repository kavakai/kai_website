import React from "react";
import "./Project.css"

export const Project = ({ title, info, liveLink, github, image, backend }) => {
  return (
    <article className="proj-card">
      <h2>{title}</h2>
      <br/>
      <img className="scale-in-center" src={image} />
      <br/>
      <p>{info}</p>
      <br/>
      <a href={liveLink} target="_blank">Link to Project</a>
      <a href={github} target="_blank">Github</a>
      {backend && <a href={backend}>Server Repo</a>}
    </article>
  )
}