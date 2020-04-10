import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const HomeHero = () => {
  return (
    <Section className="hero is-link  is-medium is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-4 is-family-code"> Hello! I am</h1>
          <h1 className="title is-1 is-family-code">Dharmveer Bangar </h1>
          <h2 className="subtitle is-3 is-family-code	">
            Front End Web Developer
          </h2>
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
