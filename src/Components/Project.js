import React from "react";
import githubLink from "../Assets/github.png"
import liveLink from "../Assets/play"
import "./Project.css"

export const Project = ({ title, info, liveLink, github, image, backend }) => {
  return (
    <article className="proj-card">
      <h2>{title}</h2>
      <br/>
      <img className="scale-in-center" src={image} />
      <br/>
      <p>{info}</p>
      <br />
      <div className="link-holder">
        <a href={liveLink} target="_blank">
          <img src={liveLink} />
        </a>
        <a href={github} target="_blank">
          <img src={githubLink} />
        </a>
        {/* {backend && <a href={backend}>Server Repo</a>} */}
      </div>
    </article>
  )
}