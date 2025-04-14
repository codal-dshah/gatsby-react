import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { injectTestimonialSlider } from "../components/injectSlider";

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

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`;

export default DefaultTemplate;
