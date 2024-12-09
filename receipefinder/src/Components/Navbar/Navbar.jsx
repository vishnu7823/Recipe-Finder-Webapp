import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleSearch = () => {
    onSearch(searchTerm); // Pass search term
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    onFilterChange(filter); // Pass selected filter
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="app-name">Food Recipe Finder</h1>
      </div>

      <div className="things">
        

      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="filter-dropdown"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
