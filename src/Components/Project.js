import React from "react";
import githubLink from "../Assets/github.png"
import linkImg from "../Assets/play-button.png"
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
        {liveLink.length ? <a className="link" href={liveLink} target="_blank">
          <img className="link-img" src={linkImg} />
        </a>: <div/>}
        <a className="link" href={github} target="_blank">
          <img className="link-img" src={githubLink} />
        </a>
        {/* {backend && <a href={backend}>Server Repo</a>} */}
      </div>
    </article>
  )
}