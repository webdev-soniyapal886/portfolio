import React from "react";
import resumeData from "../data/resumeData.json";

export const Resume = () => {
  const { sectionTitle,  summary, education, experience } = resumeData;

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>{sectionTitle}</h2>
      </div>

      {/* Resume Content */}
      <div className="container">
        <div className="row">
          {/* Left Side - Summary and Education */}
          <div className="col-lg-6">
            <h3 className="resume-title">{summary.title}</h3>
            <div className="resume-item pb-0">
              <h4>{summary.name}</h4>
              <p><em>{summary.description}</em></p>
              <h6> <b> {summary.subtitle}</b></h6>
              <ul>
                {summary.contact.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <h3 className="resume-title">{education.title}</h3>
            {education.items.map((edu, i) => (
              <div className="resume-item" key={i}>
                <h4>{edu.degree}</h4>
                <h5>{edu.years}</h5>
                <h6><b>{edu.institute}</b></h6>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Experience */}
          <div className="col-lg-6">
            <h3 className="resume-title">{experience.title}</h3>
            {experience.items.map((exp, i) => (
              <div className="resume-item" key={i}>
                <h4>{exp.role}</h4>
                <h5>{exp.years}</h5>
                <h6><b>{exp.company}</b></h6>
                <ul>
                  {exp.details.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
