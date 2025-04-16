import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TestimonialSlider from '../components/TestimonialSlider';
import { injectTestimonialSlider } from '../components/injectSlider';
import Footer from '../components/Footer';

const IndexPage = () => {
  useEffect(() => {
    injectTestimonialSlider();
  }, []);
  return (
    <div className="App">
      <Header />
      <Banner />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export const query = graphql`
  {
    allWpPost {
      nodes {
        id
        title
        content
      }
    }
  }
`;

export default IndexPage;
