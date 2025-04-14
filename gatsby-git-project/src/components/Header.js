import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import "./header.css"; // Import CSS file

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
          url
        }
      }
      allWpMenuItem(filter: {locations: {eq: PRIMARY_MENU}}) {
        nodes {
          id
          label
          url
        }
      }
      allWpMediaItem(filter: {title: {eq: "pexels-souvenirpixels-414612"}}) {
        nodes {
          sourceUrl
        }
      }
    }
  `);

  const siteTitle = data.wp.generalSettings.title;
  const menuItems = data.allWpMenuItem.nodes;
  const logo = data.allWpMediaItem.nodes.length > 0 ? data.allWpMediaItem.nodes[0].sourceUrl : "";

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={siteTitle} />
        </Link>
      </div>
      <nav>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
