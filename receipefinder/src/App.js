import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Slideshow from './Components/Slideshow/Slideshow'
import Recipecards from './Components/Recipecards/Recipecards'
import Footer from './Components/Footer/Footer'



function App() {

  const [searchTerm,setSearchTerm] = useState("");
  const[selectedFilter,setSelectedFilter] = useState("all");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} onFilterChange={handleFilterChange}/>
      <Slideshow/>
      <Recipecards searchTerm={searchTerm} selectedFilter={selectedFilter}/>
      <Footer/>
      
      
    </div>
  )
}

export default App
