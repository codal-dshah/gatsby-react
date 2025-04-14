import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const post = data.wpPost;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.featuredImage && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.title}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
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
