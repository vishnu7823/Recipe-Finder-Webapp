import React from 'react';
import "./Choices.css";

const Choices = ()=> {

  const cards = [
    {text:"Recipes & Menus", color: "f47c5f"},
    {text:"Recipes & Menus", color: "f47c5f"},
    {text:"Recipes & Menus", color: "f47c5f"},
    {text:"Recipes & Menus", color: "f47c5f"},
    {text:"Recipes & Menus", color: "f47c5f"}
  ];
  return (
    <div className='cards-row'>
      {cards.map((card,index)=>{
        <div key={index} className='card' style={{backgroundColor: card.color}} >

          <span>{card.text}</span>
          <span className='arw'>➔</span>
        </div>
      })}
    </div>
  )
}

export default Choices;
