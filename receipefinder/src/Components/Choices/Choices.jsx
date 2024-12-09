import React from 'react';
import "./Choices.css";

const Choices = ()=> {

  const cards = [
    {text:"Recipes & Menus", color: "f47c5f"},
    {text:"Share your recipes", color: "f47c5f"},
    {text:"Custom Meal Plan", color: "f47c5f"},
    {text:"create Grosery List", color: "f47c5f"},
    {text:"Cooking Tips & Tricks", color: "f47c5f"}
  ];
  return (
    <div className='cards-row'>
      {cards.map((card,index)=>(
        <div key={index} className='card' style={{backgroundColor: card.color}} >

          <span>{card.text}</span>
          <span className='arw'>➔</span>
        </div>
      
    ))}
    </div>
  )
}

export default Choices;
