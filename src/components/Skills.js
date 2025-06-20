import React from "react";
import { 
  FiCode, 
 FiTool
} from "react-icons/fi";
export const Skills = () => {
  return (
    <div><section id="skills" className="skills section pt-0">

<div className="container">
  <div className="section-title">
  <h2 className="text-center mb-0">My Skills</h2>
  </div>
      <div
  className="container aos-init aos-animate"
  data-aos="fade-up"
  data-aos-delay={100}
>
  <div className="row skills-content skills-animation">
    <div className="col-lg-6">
    <h4 className="section-subtitle"><FiCode className="me-2" /> Frontend Development</h4>
      <div className="progress">
        <span className="skill">
          <span>HTML5</span> <i className="val">95%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={95}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "95%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
      <div className="progress">
        <span className="skill">
          <span>CSS3</span> <i className="val">95%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={95}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "95%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
      <div className="progress">
        <span className="skill">
          <span>JavaScript (ES6+)</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "80%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
      <div className="progress">
        <span className="skill">
          <span>React</span> <i className="val">60%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={60}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "60%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
   
    </div>
    <div className="col-lg-6  pt-5 pt-lg-0">
    <h4 className="section-subtitle"><FiTool className="me-2" /> CMS Expertise</h4>
    
      <div className="progress">
        <span className="skill">
          <span>WordPress</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "80%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
      <div className="progress">
        <span className="skill">
          <span>Shopify</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "80%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
      <div className="progress">
        <span className="skill">
          <span>HubSpot</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "80%" }}
          />
        </div>
      </div>
      {/* End Skills Item */}
    </div>
  </div>
</div>

    </div>


  </section>
  </div>
  )
}
