import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Slideshow from './Components/Slideshow/Slideshow'
import Recipecards from './Components/Recipecards/Recipecards'
import Footer from './Components/Footer/Footer'



function App() {

  const [searchTerm,setSearchTerm] = useState("");
  const[filter,setFilter] = useState("all");
  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} setFilter={setFilter}/>
      <Slideshow/>
      <Recipecards searchTerm={searchTerm} filter={filter}/>
      <Footer/>
      
      
    </div>
  )
}

export default App
