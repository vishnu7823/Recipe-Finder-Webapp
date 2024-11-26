import React,{useState} from "react";
import "./Navbar.css";

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle between open and closed states
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="app-name">Food Recipe Finder</h1>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search recipes..." className="search-input" />
        <select className="filter-dropdown">
          <option value="">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        <button className="search-btn">Search</button>
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-link">Home</a>
        <a href="/explore" className="nav-link">Explore</a>
        <a href="/profile" className="nav-link">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
