import React from 'react'
import {Skills} from './Skills'

export const About = () => {
  return (
    <div><section id="about" className="about section">

   {/* Section Title */} 
    <div className="container section-title aos-init aos-animate" data-aos="fade-up">
      <h2>About Me</h2>
    </div>
    {/* End Section Title */} 

    <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

      <div className="row gy-4 justify-content-center align-items-md-center">
        <div className="col-lg-4">
            <div className= "home-photo">
            <img src="assets/my-profile.jpg" className="img-fluid" alt="Profile" />
            </div>
         
        </div>
        <div className="col-lg-8  content">
          <div className="about-me ">
          <p>
  I am a <strong>skilled Front-End Developer</strong> with over <strong>7.0 years of experience</strong> in web design and development. My expertise spans across <strong>HubSpot CMS</strong>, <strong>Shopify</strong>, <strong>WordPress</strong>, and modern front-end technologies including <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SASS/SCSS</strong>, <strong>JavaScript</strong>, and <strong>AJAX</strong>. I also have foundational knowledge in <strong>PHP</strong>, <strong>databases</strong>, and experience working with tools like <strong>Adobe Photoshop</strong> and <strong>Adobe XD</strong>.
</p>

<p>
  I have a <strong>strong eye for design</strong> and a proven ability to <strong>translate client requirements into engaging, responsive, and user-friendly web applications</strong>. Known for delivering <strong>high-quality code</strong>, I thrive in <strong>collaborative environments</strong> and enjoy solving design challenges with <strong>innovative front-end solutions</strong>.
</p>

<p>
  I am seeking a <strong>challenging role in a creative environment</strong> where I can continue to <strong>grow</strong> and <strong>contribute to impactful digital experiences</strong>.
</p>

          </div>
        
          <div className="row">
            <div className="col-lg-6">
              <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Full Name:</strong> <span>Soniya Pal</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9696855696</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Navi Mumbai, India</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech(CSE)</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>soniyapal886@gmail.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>

    </div>

  </section>
  <Skills />
  </div>
  
  )
}
