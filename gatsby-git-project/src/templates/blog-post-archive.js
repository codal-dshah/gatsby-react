import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import parse from 'html-react-parser';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they will
          appear here!
        </p>
      </Layout>
    );
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      <Bio />

      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => (
          <li key={post.uri}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <section itemProp="description">{parse(post.excerpt)}</section>
            </article>
          </li>
        ))}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string.isRequired,
          uri: PropTypes.string.isRequired,
          date: PropTypes.string,
          title: PropTypes.string.isRequired,
        })
      ),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(sort: { date: DESC }, limit: $postsPerPage, skip: $offset) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
