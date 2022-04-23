import React from "react";

export const Project = ({ title, info, liveLink, github, image, backend }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{info}</p>
      <img className="scale-in-center" src={image} />
      <a href={liveLink} target="_blank">Link to Project</a>
      <a href={github} target="_blank">Github</a>
      {backend && <a href={backend}>Server Repo</a>}
    </div>
  )
}