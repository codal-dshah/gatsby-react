import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './Banner.css';

const Banner = ({pageID}) => {
  // Fetch page content using GraphQL
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDo5NQ==" }) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `);

  if (!data.wpPage) {
    return <div>Loading...</div>;
  }

  const { title, content, featuredImage } = data.wpPage;
  const bannerImage = featuredImage?.node?.sourceUrl || 'default-image.jpg';

  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-text">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Banner;
