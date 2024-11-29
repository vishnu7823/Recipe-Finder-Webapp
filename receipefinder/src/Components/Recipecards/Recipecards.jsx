import React ,{useEffect, useState}from 'react'
import { HeartOutlined, StarOutlined } from "@ant-design/icons"; 
import "./Recipecards.css";



const Recipecards = ({searchTerm,selectedFilter}) => {

    const[recipes,setRecipes] = useState([]);
    const[visiblerecipes,setVisiblerecipes] = useState(12);
    const[expanded, setIsExpanded] = useState(false);
    // const[searchTerm,setSearchTerm] = useState("");
    // const[filter,setFilter] = useState("");

    const toogleloadmore = ()=>{

        if(expanded){
            setVisiblerecipes(12);
            setIsExpanded(false);
            
        }
        else{
            setVisiblerecipes(recipes.length);
            setIsExpanded(true);
        }


       
    }

    useEffect(()=>{
        const fetchrecipe = async()=>{

            const baseUrl = "https://api.spoonacular.com/recipes/complexSearch"
            const apiKey = "471130de01fe49f58eeeacc76c60d71e"

            const filterQuery = selectedFilter !== "all" ? `&diet=${selectedFilter}` : " ";
            const searchQuery = searchTerm ? `&query=${searchTerm}` : "";

            try{
                
                const response = await fetch(
                    `${baseUrl}?cuisine=Indian&number=50${filterQuery}${searchQuery}&apiKey=${apiKey}`
                );
                const data = await response.json();
               
                setRecipes(data.results || []);
            }
            catch(error){
                console.log("error fetching data",error);
                setRecipes([]);
            }
        };
        fetchrecipe();
    },[searchTerm,selectedFilter]);
  return (
    <div className='full-page'>
        { recipes.length>0 ? (recipes.slice(0,visiblerecipes).map((recipe,index)=>(
            <div className='grid-card' key={index}>
                <img src={recipe.image} className='img'/>
                <div className='details'>
                    <h1 className='text'>{recipe.title}</h1>
                    <p className='time'>Cooking Time: {recipe.readyinminutes || "N/A"} mins</p>

                    <div className='icons'>
                        <span className='like'>
                          <HeartOutlined/> {recipe.aggregateLikes || "0" }
                        </span>

                        <span className='rating'>
                           <StarOutlined/> {recipe.spoonacularScore || "N/A"}
                        </span>
                       

                    </div>

                </div>

            </div>
        ) )) : ( 
            <p>Loading Recipes please wait .....</p>
        )}

                         {recipes.length > 12 && (
        <div className="btn">
          <button className="load-more" onClick={toogleloadmore}>
            {expanded ? 'Close' : 'Load More'}
          </button>
        </div>
            )}



                           
                 
      
    </div>
  )
}

export default Recipecards;