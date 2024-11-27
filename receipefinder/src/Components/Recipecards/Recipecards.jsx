import React ,{useEffect, useState}from 'react'
import { HeartOutlined, StarOutlined } from "@ant-design/icons"; 
import "./Recipecards.css";

const Recipecards = () => {

    const[recipes,setRecipes] = useState([]);
    const[visiblerecipes,setVisiblerecipes] = useState(12);

    const loadmore = ()=>{
        setVisiblerecipes((prevVisible)=>prevVisible+12);
    }

    useEffect(()=>{
        const fetchrecipe = async()=>{

            try{
                const response = await fetch("https://api.spoonacular.com/recipes/random?number=24&apiKey=73219b102c8d4544a42c2c8d6ed63a50");
                const data = await response.json();
               
                setRecipes(data.recipes);
            }
            catch(error){
                console.log("error fetching data",error)
            }
        };
        fetchrecipe();
    },[]);
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

                         {visiblerecipes<recipes.length && (
                                <div className='btn'>
                                <button className='load-more' onClick={loadmore}>Load More</button>

                                </div>
                            )}



                           
                 
      
    </div>
  )
}

export default Recipecards;