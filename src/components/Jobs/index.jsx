import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";
import Job from "./../../Assets/jobs.json";
import { useDispatch, useSelector } from "react-redux";

const Jobs = () => {
  const { jobs } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => { dispatch({ type: "JOBS", payload: Job }) }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Our Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {jobs.map(
              ({ id, logo, company, position, location, role }) => {
                return (

                  <div className="job-list">
                    <div className="job-card">
                      <div className="job-name">
                        <img
                          src={
                            logo.length > 20
                              ? logo
                              : require(`../../Assets/images/${logo}`)
                          }
                          alt="logo"
                          className="job-profile"
                        />
                        <div className="job-detail">
                          <h4>{company}</h4>
                          <h3>{position}</h3>
                          <div className="category">
                            <p>{location}</p>
                            <p>{role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="job-button">
                        <div className="job-posting">
                          <Link to={`/apply-jobs/${id}`}>Apply Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
