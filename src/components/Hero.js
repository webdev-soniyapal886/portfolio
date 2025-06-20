
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
 
  return (
  
<>
<section id="hero" className="hero section">
<div className="container text-center">
  <div className="row justify-content-center">
    <div className="col-md-8 col-md-offset-2 text-center">
      <div className="display-t">
         <div className= "display-tc">
         <div
    className="profile-thumb"
    style={{ backgroundImage: "url(assets/my-profile-small.jpg)" }}
  />
         </div>
      </div>
      <h2>Hi, I'm Soniya 👋</h2>
      <p>
      Frontend Developer | UI/UX Focused | WordPress | Shopify | HubSpot</p>
      <Link to="/about" className="btn-get-started">About Me</Link>
    </div>
  </div>
</div>

</section>
</>


  )
}
