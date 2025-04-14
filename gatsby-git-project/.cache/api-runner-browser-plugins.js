module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"http://localhost/wordpress-headless-1/graphql","schema":{"requestConcurrency":5,"previewRequestConcurrency":2,"queryDepth":15,"circularQueryLimit":5,"typePrefix":"Wp","timeout":30000,"perPage":100},"verbose":true,"catchLinks":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
