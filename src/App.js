import React from 'react';
import header from "./assets/img/image-header.jpg";
import logo from "./assets/icons/logo.svg";
import arrow from "./assets/icons/icon-arrow-down.svg";
import egg from "./assets/img/image-transform.jpg";
import cup from "./assets/img/image-stand-out.jpg";
import cherry from "./assets/img/image-graphic-design.jpg";
import orange from "./assets/img/image-photography.jpg";

export const App = () => {
  return (
    <main>
      <div className="hero-header-container">
        <div className="hero-header-logo">
          <img src={logo} alt="landing"/>
        </div>
        <div className="hero-header-menu">
          <div>About</div>
          <div>Services</div>
          <div>Projects</div>
          <div>CONTACT</div>
        </div>
        <div className="hero-header-title">
          <p>we are creatives</p>
          <img src={arrow} />
        </div>
        <img src={header} alt="landing"/>
      </div>

      <div className="seccion">
        <div className="seccion-text">
          <div className="seccion-text-container">
            <p className="seccion-text-title">Transform your brand</p>
            <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <p className="seccion-text-more">
              LEARN MORE
              <em className="line-yellow"></em>
            </p>
          </div>  
        </div>
        <div>
          <img src={egg} alt="landing" />
        </div>
        <div>
          <img src={cup} alt="landing" />
        </div>
        <div className="seccion-text">
          <div className="seccion-text-container">
            <p className="seccion-text-title">Stand out to the rigth audience</p>
            <p>Using a collaborative formula of designers, and copywriters, we'll build and extend your brand in digital places.</p>
            <p className="seccion-text-more">
              LEARN MORE
              <em className="line-red"></em>
            </p>
          </div> 
        </div>
        <div>
          <img src={cherry} alt="landing" />
          <div className="seccion-text-complement">
          
          </div>
        </div>
        <div>
          <img src={orange} alt="landing" />
          <div className="seccion-text-complement">

          </div>
        </div>
      </div>
    </main>
  )
}

