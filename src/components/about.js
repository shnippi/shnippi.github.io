import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

// THIS DOES NOT GET USED: FOR THE ABOUT SECTION LOOK AT THE PROMOTION SECTION

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          {<div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default About
// THIS DOES NOT GET USED: FOR THE ABOUT SECTION LOOK AT THE PROMOTION SECTION

