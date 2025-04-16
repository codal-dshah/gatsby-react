import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.wpPost;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.featuredImage && (
        <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    wpPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      featuredImage: PropTypes.shape({
        node: PropTypes.shape({
          sourceUrl: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM D, YYYY")
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export default BlogPost;
