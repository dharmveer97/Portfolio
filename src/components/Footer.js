import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.div`
  .FooterComponent {
    &__container {
      display: flex;
      flex-wrap: wrap;
      > div {
        display: flex;
        flex: none;
        justify-content: center;
        width: 100%;
        margin-bottom: 24px;
      }

      .brand {
        img {
          display: block;
          height: 32px;
        }
      }

      .social {
        align-items: flex-end;
      }

      .social,
      .links {
        a {
          color: inherit;
          &:hover {
            opacity: 0.8;
          }

          &:not(:first-of-type) {
            margin-left: 20px;
          }
        }
      }

      // Tablet and up
      @media screen and (min-width: 769px) {
        > div {
          flex: 50%;
        }

        .left {
          justify-content: flex-start;
        }

        .right {
          justify-content: flex-end;
        }
        .links {
          order: 1;
        }
      }
    }
  }
`;

const Footer = () => (
  <Section className="section">
    <div className="FooterComponent__container container">
      <div className="brand left">
        <Link to="/">
          <img src="/images/logo-1024.svg" alt="Logo" />
        </Link>
      </div>
      <div className="links right">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Services</Link>
        <Link to="/contact">Resume</Link>
      </div>
      <div className="social right">
        <a href="https://twitter.com" rel="">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
        </a>
        <a href="https://facebook.com">
          <span className="icon">
            <i className="fab fa-facebook-f" />
          </span>
        </a>
        <a href="https://instagram.com">
          <span className="icon">
            <i className="fab fa-instagram" />
          </span>
        </a>
      </div>
      <div className="copyright left">Dharmveer Bangar</div>
    </div>
  </Section>
);

export default Footer;
