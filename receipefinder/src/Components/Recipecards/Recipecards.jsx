import React, { useEffect, useState } from "react";
import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import "./Recipecards.css";

const Recipecards = ({ searchTerm, selectedFilter }) => {
  const [recipes, setRecipes] = useState([]);
  const [visiblerecipes, setVisiblerecipes] = useState(12);
  const [expanded, setIsExpanded] = useState(false);

  const toggleLoadMore = () => {
    if (expanded) {
      setVisiblerecipes(12);
      setIsExpanded(false);
    } else {
      setVisiblerecipes(recipes.length);
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
      const apiKey = "ea8ebe71cf7940ca870e7c9f354c617f";
      const cuisine = "Indian";
      const number = 50;

      // Include selected filter and search term in the query
      const dietQuery =
        selectedFilter !== "all" ? `&diet=${encodeURIComponent(selectedFilter)}` : "";
      const searchQuery = searchTerm ? `&query=${encodeURIComponent(searchTerm)}` : "";

      try {
        const response = await fetch(
          `${baseUrl}?cuisine=${cuisine}&number=${number}&addRecipeInformation=true${dietQuery}${searchQuery}&apiKey=${apiKey}`
        );
        const data = await response.json();
        setRecipes(data.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecipes([]);
      }
    };

    fetchRecipe();
  }, [searchTerm, selectedFilter]); // Refetch when searchTerm or selectedFilter changes

  return (
    <div className="full-page">
      {recipes.length > 0 ? (
        recipes.slice(0, visiblerecipes).map((recipe, index) => (
          <div className="grid-card" key={index}>
            <img src={recipe.image} className="img" alt={recipe.title} />
            <div className="details">
              <h1 className="text">{recipe.title}</h1>
              <p className="time">
                Cooking Time: {recipe.readyInMinutes || "N/A"} mins
              </p>
              <div className="icons">
                <span className="like">
                  <HeartOutlined /> {recipe.aggregateLikes || "0"}
                </span>
                <span className="rating">
                  <StarOutlined /> {recipe.spoonacularScore || "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found. Try adjusting your search or filters.</p>
      )}

      {recipes.length > 12 && (
        <div className="btn">
          <button className="load-more" onClick={toggleLoadMore}>
            {expanded ? "Close" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipecards;
