import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CustomPageTemplate = ({ data }) => {
  const { title, content } = data.wpPage;

  return (
    <>
      <Header />
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <Footer />
    </>
  );
};

CustomPageTemplate.propTypes = {
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
      template {
        templateName
      }
    }
  }
`;

export default CustomPageTemplate;
