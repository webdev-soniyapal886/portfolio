import React from 'react';
import servicesData from '../data/services.json';

export const Services = () => {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center mb-0">My Services</h2>
        </div>

        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className={`${service.icon} fs-2 text-accent mb-3 fw-bolder`} />
                  <h5 className="card-title text-accent fw-bolder">{service.title}</h5>
                  <p className="card-text fw-bold">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
