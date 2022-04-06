import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <div className="quote-div">
                <h2 className="quote-paragraph">{data.headerTagline[0]}</h2>
                <h2 className="quote-credit">- Râphy H.</h2>
              </div>

              {/*
              <h2>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h2>
               <h2>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h2>
              <h2>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h2> */}
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>

            <a
              href={"https://docs.google.com/gview?url=https://github.com/shnippi/shnippi.github.io/raw/master/src/CV/CV_Jan_Schnyder.pdf"}
              className="primary-btn"
            >
              MY RESUME
            </a>

          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
