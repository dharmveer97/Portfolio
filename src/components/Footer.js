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

        // Move links to end (bottom right)
        // Swaps position with social
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
          <img src="" alt="Logo" />
        </Link>
      </div>
      <div className="links right">
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <a target="_blank" href="https://medium.com" rel="noopener noreferrer">
          Blog
        </a>
      </div>
      <div className="social right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-facebook-f" />
          </span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-instagram" />
          </span>
        </a>
      </div>
      <div className="copyright left">dddd</div>
    </div>
  </Section>
);

export default Footer;
