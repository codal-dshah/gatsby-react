import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';

const CustomTemplate = ({ data }) => {
  const page = data.wpPage;
  return (
    <div>
      <Header />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <div>Page Template Name : {page.testTemplateFields.templateName}</div>
      <div>Page Template DESC1 : {page.testTemplateFields.templateDesc}</div>

      <Footer />
    </div>
  );
};

CustomTemplate.propTypes = {
  data: PropTypes.shape({
    wpPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      testTemplateFields: PropTypes.shape({
        templateName: PropTypes.string.isRequired,
        templateName: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      testTemplateFields {
        templateName
        templateDesc
      }
    }
  }
`;

export default CustomTemplate;
