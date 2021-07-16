import React from "react"
import astronaut from "../../images/gatsby-astronaut.png"


const Card = ({ heading, paragraph, img, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
        `url(${img})`
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card
