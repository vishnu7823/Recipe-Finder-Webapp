import React,{useState} from "react";
import "./Navbar.css";

const Navbar = ({onSearch , onFilterChange}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle between open and closed states
  };

  const[searchTerm , setSearchTerm] = useState("");
  const[selectedFilter,setSelectedFilter] = useState("all");

  const handlesearch  = ()=>{
    
    onSearch(searchTerm);

  };

  const handlefilterChange = (e)=>{
    const filter = e.target.value;
    setSelectedFilter(filter);
    onFilterChange(filter);
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
        <input type="text" placeholder="Search recipes..." className="search-input" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <select className="filter-dropdown" value={selectedFilter} onChange={handlefilterChange}>
          <option value="all">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        <button className="search-btn" onClick={handlesearch}>Search</button>
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
