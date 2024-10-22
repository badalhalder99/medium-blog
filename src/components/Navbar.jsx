import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import '../css/navbar.css';

const navItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About us', path: '/about' },
  { id: 3, name: 'Carrier', path: '/carrier' },
  { id: 4, name: 'Contact us', path: '/contact' },
  { id: 5, name: 'Blogs', path: '/blogs' },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoWrap">
            <Link className='logo'>Medium</Link>
          </div>

          <nav>
            <ul className='menuWrap'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'nav-active' : 'navLink'}
                  >
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars className='barIcon'/>
          </button>
        </div>
        
        <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
        {/* Sidebar menu code start */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="logoWrap">
              <Link className='logo sidebarLogo'>Medium</Link>
            </div>
            <div onClick={() => setIsSidebarOpen(false)} className='sidebarCloseBtn'>
              <MdClose />
            </div>
          </div>

          <div className="sidebar-content">
            <ul className='sidebar-menu'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'sidebar-nav-item-active' : 'sidebarNavLink'}
                  >
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
