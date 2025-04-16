import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../components/footer.css'; // Import styles

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footer_menu1: wpMenu(id: { eq: "dGVybTo1" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
      footer_menu2: wpMenu(id: { eq: "dGVybTo2" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
      footer_menu3: wpMenu(id: { eq: "dGVybTo3" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
      footer_menu4: wpMenu(id: { eq: "dGVybTo0" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `);

  // Store menus in an array for easier mapping
  const menus = [
    {
      title: data?.footer_menu1?.name,
      items: data?.footer_menu1?.menuItems?.nodes,
    },
    {
      title: data?.footer_menu2?.name,
      items: data?.footer_menu2?.menuItems?.nodes,
    },
    {
      title: data?.footer_menu3?.name,
      items: data?.footer_menu3?.menuItems?.nodes,
    },
    {
      title: data?.footer_menu4?.name,
      items: data?.footer_menu4?.menuItems?.nodes,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {menus.map((menu, index) => (
          <div key={index} className="footer-column">
            <h4>{menu.title}</h4>
            <ul>
              {menu.items?.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
