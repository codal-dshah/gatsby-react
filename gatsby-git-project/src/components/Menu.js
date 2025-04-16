import React, { useEffect, useState } from 'react';
import './Menu.css'; // Import CSS for styling
import logo from '../assets/logo.png'; // ✅ Update path to your logo

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/wordpress-headless-1/wp-json/wp/v2/menu')
      .then((response) => response.json())
      .then((data) => {
        // Check if API response contains menu items
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else if (data.items && Array.isArray(data.items)) {
          setMenuItems(data.items); // ✅ Adjust for nested structure
        } else {
          console.error('Unexpected API response:', data);
          setError('Invalid menu data received.');
          setMenuItems([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching menu:', error);
        setError('Failed to load menu.');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <nav className="menu">
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.ID} className="menu-item">
                <a href={item.url} className="menu-link">
                  {item.title.rendered || item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
