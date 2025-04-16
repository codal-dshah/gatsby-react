import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectTestimonialSlider } from '../components/injectSlider';

const DefaultTemplate = ({ data }) => {
  const { title, content } = data.wpPage;

  useEffect(() => {
    injectTestimonialSlider();
  }, []);

  return (
    <main>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

DefaultTemplate.propTypes = {
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

export default DefaultTemplate;
