require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Gatsby WordPress Site",
    description: "A Gatsby site connected to WordPress",
    author: "@yourname",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://localhost/wordpress-headless-1/graphql",
        schema: {
          requestConcurrency: 5, // Adjust for performance
          previewRequestConcurrency: 2,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
