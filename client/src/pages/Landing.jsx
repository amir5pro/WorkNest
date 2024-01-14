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
            Welcome to Werknest, where your career takes flight! Whether you are
            a company looking to fill a position or an individual seeking the
            perfect job match, our diverse range of opportunities and
            user-friendly platform can help you achieve your goals. Join our
            community of driven professionals and unlock your full potential.
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
