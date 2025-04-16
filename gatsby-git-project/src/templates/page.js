import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // ✅ Added import
import { graphql } from 'gatsby';
import Header from '../components/Header';
import { injectTestimonialSlider } from '../components/injectSlider';
import Footer from '../components/Footer';

const PageTemplate = ({ data }) => {
  const { title, content } = data.wpPage;

  useEffect(() => {
    injectTestimonialSlider();
  }, []);

  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Footer />
    </div>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    wpPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`;

export default PageTemplate;
