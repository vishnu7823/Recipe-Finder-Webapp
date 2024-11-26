import React from "react";
import "./SideBar.css";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <ul className="sidebar-menu">
        <li><a href="/">Cuisines</a></li>
        <li><a href="/">Meal Types</a></li>
        <li><a href="/">Dietary Preferences</a></li>
        <li><a href="/">Favorites</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
