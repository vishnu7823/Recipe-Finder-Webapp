import React from "react";
import "./Footer.css";
import { InstagramOutlined ,LinkedinOutlined, TwitterOutlined ,FacebookOutlined} from "@ant-design/icons"; 

const Footer = () => {
  return (
    <>
    <div className="full-footer">
      <div className="footer">
        {/* Title Section */}
        <div className="title">
          <h1>Recipe Finder</h1>
          <p>
          RecipeFinder is a recipe website with a wide variety of delicious recipes,
            easy-to-use search functions. Join our community and let's cook together!
          </p>
        </div>

        {/* Company Section */}
        <div className="company">
          <h1>Company</h1>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Team</li>
            <li>About us</li>
            <li>Activity</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="resources">
          <h1>Resources</h1>
          <ul>
            <li>Blog</li>
            <li>Use Cases</li>
            <li>Testimonials</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="subscribe">
          <img src="logo-placeholder.png" alt=" Logo" />
          <p>Please enter your email to subscribe ours...</p>
          <div className="input-container">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          </div>
     
        </div>
        
      </div>
      <div className="social -links">
      <InstagramOutlined />
      <LinkedinOutlined />
      <TwitterOutlined />
      <FacebookOutlined />
      </div>
      </>

     
    
     
  );
};

export default Footer;
