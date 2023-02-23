import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>Error Page 404 🥺</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;