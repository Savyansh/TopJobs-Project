import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            FIND YOUR DREAM JOB
          </h3>
          <div className="small-tagline">
            <p>
              You are not limited to your city for boring jobs. You can use TopJobs portal
              <br />
              for suitable jobs in easy way across the country.
            </p>
          </div>
        </div>
        <div className="button-wrapper">
          <div className="button" data-testid="btn">
            <Link to="/Jobs">Jobs</Link>
          </div>
          <div className="button">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="button" >
            <Link to="/inprocess">Coming Soon...</Link>
          </div>
        </div>
      </div>
      <div className="social-media" data-testid="images">
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg" alt="fb" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg" alt="google" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg" alt="youtube" />
        <img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg" alt="linkedin" />
      </div>
    </>
  );
};

export default Home;
