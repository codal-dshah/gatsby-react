# Gatsby + WordPress Headless CMS

This project is a headless WordPress setup using Gatsby as the frontend framework. WordPress acts as a backend CMS with data sourced into Gatsby via GraphQL.

---

## 📦 Requirements

-   Node.js & npm
-   XAMPP (for local WordPress server)
-   WordPress (downloaded from [wordpress.org](https://wordpress.org))
-   Gatsby CLI

---

## 🔧 Installation Guide

### 1. Install WordPress Locally

1. Download the latest WordPress from [wordpress.org](https://wordpress.org).
2. Install and configure it using [XAMPP](https://www.apachefriends.org/index.html).
3. Setup the WordPress site via `http://localhost/your-site-folder`.

---

### 2. Install WPGraphQL & WPGatsby Plugins

In your local WordPress admin dashboard:

-   Go to **Plugins > Add New**
-   Install and activate the following:
    -   [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
    -   [WPGatsby](https://wordpress.org/plugins/wp-gatsby/)

These plugins enable your WordPress instance to expose data via GraphQL and work with Gatsby.

---

### 3. Setup Gatsby Frontend

Follow the tutorial from WP Engine:  
🔗 [Gatsby + WordPress Setup Guide](https://wpengine.com/resources/wordpress-gatsby-tutorial/#Step_2_Install_Gatsby)

Basic steps include:

```bash
npm install -g gatsby-cli
gatsby new gatsby-site
cd gatsby-site

```

### 4. Change Graph URL in the gatsby-config.js file

```bash
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost/your-site-folder/graphql`,
      },
    },
  ],
}

```

### 5. Run Gatsby command

```bash
gatsby develop

```
