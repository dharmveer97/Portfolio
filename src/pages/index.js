import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero />
        <AboutMe />
        <Services />
        <Resume />
        <Portfolio />
        <ContactUs />
      </Layout>
    );
  }
}
