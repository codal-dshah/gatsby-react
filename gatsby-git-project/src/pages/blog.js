import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
// import Banner from '../components/Banner';
import './blog.css';
import Footer from '../components/Footer';

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes;

  return (
    <div className="blog-page">
      <Header />
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            {post.featuredImage && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                className="post-image"
              />
            )}
            <h2>
              <Link to={post.uri}>{post.title}</Link>
            </h2>
            <p className="post-date">{post.date}</p>
            <div
              className="post-excerpt"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <Link to={post.uri} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          excerpt: PropTypes.string.isRequired,
          uri: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          featuredImage: PropTypes.shape({
            node: PropTypes.shape({
              sourceUrl: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  query BlogPostsQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        title
        excerpt
        uri
        date(formatString: "MMMM D, YYYY")
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default BlogPage;
