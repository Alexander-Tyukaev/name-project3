import React, { useState } from 'react';
import "./main.css"
import "./main.adaptiv.css"

import { PostCard } from "../PostCard/PostCard"



let cardsArr=
[
  {
  id:1,
  title:"1 Post",
  favorite:false,
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi elementum, interdum nisl vel.",
  },
  {
    id:2,
    title:"2 Post",
    favorite:false,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi magna. Etiam nisi turpis, malesuada sit.",
  },
  {
      id:3,
      title:"3 Post",
      favorite:false,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at mi elementum, interdum nisl vel.",
  },
  {
    id:4,
    title:"4 Post",
    favorite:false,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue purus, sodales.",
},
{
  id:5,
  title:"5 Post",
  favorite:false,
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi magna. Etiam nisi turpis, malesuada sit.",
},
{
  id:6,
  title:"6 Post",
  favorite:false,
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nisi magna. Etiam nisi turpis, malesuada sit.",
}
]
export default cardsArr;

export const Main = () => {
  











  const [cards, setCards]  = useState(cardsArr)
  const addToFavorite = (id) =>{
    cards.map((card) => {
      if(card.id === id){
        card.favorite = !card.favorite
      }
    })
  }

  const deleteCard = (id)=>{
    setCards(cards.filter(card =>card.id  !== id  ))
   
  }
  
 
  



  return (
    <div  className="main-container">
      {cards.map((card)  =>
      <PostCard key={card.id}  card={card} addToFavorite={addToFavorite} deleteCard={deleteCard} />
    )}
 
    </div>
  )
};


