import React, { useState } from 'react';
import "./main.css";
import "./main.adaptiv.css";
import { PostCard } from "../PostCard/PostCard";

 let cardsArr = [
    { id: 1,
      title: "1 Post",
      favorite: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue purus, sodales."
    },
    { id: 2,
      title: "2 Post",
      favorite: false,
      description: " Lorem ipsum dolor sit amet, consectetur adipiscing  Pellentesque non felis et metus egestas " 
    },
    { id: 3,
      title: "3 Post",
      favorite: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt tellus non enim."
     },
    { id: 4,
      title: "4 Post",
      favorite: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis est sapien, a semper eros." 
    },
    { id: 5,
      title: "5 Post",
      favorite: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis et orci vestibulum."  
    },
    { id: 6,
      title: "6 Post",
      favorite: false,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed."
     },
];

export const Main = () => {
    const [cards, setCards] = useState(cardsArr);

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

    const handleEdit = (id, updatedCard) => {
        setCards(cards.map(card => card.id === id ? updatedCard : card));
    }

    return (
        <div className="main-container">
            {cards.map((card) => (
                <PostCard key={card.id} card={card} addToFavorite={addToFavorite} deleteCard={deleteCard} onEdit={handleEdit}
                />
            ))}
        </div>
    );
};
