import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import mainLanding from "../assets/images/mainLanding.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            "Discover Your <span>Nest</span>, Find Your <span>Success</span>"
          </h1>
          <p>
            Welcome to Werknest, the ultimate platform for companies to post job
            openings and track application statistics. Whether you're looking to
            fill a position or monitor the number of applications received and
            pending, our user-friendly platform has you covered. Join our
            community of industry professionals and take your recruitment
            process to the next level.
          </p>
          <div>
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn ">
              Login /Demo User
            </Link>
          </div>
        </div>
        <img src={mainLanding} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
