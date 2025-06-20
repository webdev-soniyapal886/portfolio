import React, { useState } from 'react';
import filters from '../data/portfolioData.json';
import projects from '../data/projects.json';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredProjects =
    activeFilter === '*'
      ? projects
      : projects.filter(project => project.filter === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container section-title"><h2>Portfolio</h2></div>
      <div className="container" data-aos="fade-up">

        <ul className="portfolio-filters">
          {filters.map((filter, index) => (
            <li
              key={index}
              className={activeFilter === filter.filter ? 'filter-active' : ''}
              data-filter={filter.filter}
              onClick={() => setActiveFilter(filter.filter)}
              style={{ cursor: 'pointer' }}
            >
              {filter.category}
            </li>
          ))}
        </ul>

        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredProjects.map((project, idx) => (
            <div
              className={`col-lg-4 col-md-6 portfolio-item isotope-item ${project.filter}`}
              key={idx}
            >
                <a  href={project.previewLink} target= "_blank" rel="noreferrer" >
                <figure className="cc-effect">
              <img
                src={project.image}
                className="img-fluid"
                alt={project.title}
              />
              <figcaption>
              
              <h4>{project.title}</h4>
                <p>{project.description}</p>
                    </figcaption>
                    </figure>
                    </a>
                    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
