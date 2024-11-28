import React ,{useEffect, useState}from 'react'
import { HeartOutlined, StarOutlined } from "@ant-design/icons"; 
import "./Recipecards.css";



const Recipecards = ({searchTerm,filter}) => {

    const[recipes,setRecipes] = useState([]);
    const[visiblerecipes,setVisiblerecipes] = useState(12);
    const[expanded, setIsExpanded] = useState(false);

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

            try{
                let apiurl = "https://api.spoonacular.com/recipes/random?number=24&apiKey=96a4d7070dd945cc8708aac8b0affd7e"
                if(filter && filter !=="all"){
                    apiurl+=`&diet=${filter}`;
                }

                if(searchTerm){
                    apiurl+=`&query=${searchTerm}`;
                }
                const response = await fetch(apiurl);
                const data = await response.json();
               
                setRecipes(data.recipes);
            }
            catch(error){
                console.log("error fetching data",error)
            }
        };
        fetchrecipe();
    },[searchTerm,filter]);
  return (
    <div className='full-page'>
        {recipes.length>0 ? (recipes.slice(0,visiblerecipes).map((recipe,index)=>(
            <div className='grid-card' key={index}>
                <img src={recipe.image} className='img'/>
                <div className='details'>
                    <h1 className='text'>{recipe.title}</h1>
                    <p className='time'>Cooking Time: {recipe.readyinminutes} mins</p>

                    <div className='icons'>
                        <span className='like'>
                          <HeartOutlined/> {recipe.aggregateLikes}
                        </span>

                        <span className='rating'>
                           <StarOutlined/> {recipe.spoonacularScore}
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