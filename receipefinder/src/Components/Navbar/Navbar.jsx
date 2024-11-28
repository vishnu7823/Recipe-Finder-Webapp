import React,{useState} from "react";
import "./Navbar.css";

const Navbar = ({setSearchTerm , setFilter}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle between open and closed states
  };

  const[query , setQuery] = useState("");
  const[filter,setFilterState] = useState("all");

  const handlesearchChange  = (e)=>{
    setQuery(e.target.value);
    setSearchTerm(e.target.value);

  };

  const handlefilterChange = (e)=>{
    setFilterState(e.target.value);
    setFilter(e.target.value);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="app-name">Food Recipe Finder</h1>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search recipes..." className="search-input" value={query} onChange={handlesearchChange}/>
        <select className="filter-dropdown" value={filter} onChange={handlefilterChange}>
          <option value="all">All</option>
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
