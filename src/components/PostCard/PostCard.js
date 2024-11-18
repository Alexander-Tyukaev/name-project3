import React, {   useState,  } from 'react';
import "./postcard.css"
import cardsArr from '../Main/Main';

export  const PostCard = ({card, addToFavorite,deleteCard}) => {
    const[menu, SetMenu,] = useState(false)
    const [favCard, setFavCard] = useState(card.favorite)

    const changeFav = () => {
        setFavCard(card.favorite)
    }

    const [cards, setCards]  = useState(cardsArr)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
  
    const openModal = (card) => {
      setCurrentCard(card);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentCard(null);
    };
    const handleEdit = (event) => {
      event.preventDefault();
      const updatedCards = cards.map((card) =>
        card.id === currentCard.id
          ? { ...card, title: event.target.title.value, description: event.target.description.value }
          : card
      );
      setCards(updatedCards);
      closeModal();
    };
  return (
    <div className={favCard ? "favoritecard"  : "postcard"} id={favCard ? "favoritecard"  : "postcard"} >
      <h2 className="title">
        {card.title}
      </h2>
      <div className="description">
      {card.description}
      </div>

    <button
        onClick= {()=>SetMenu(!menu)}  class="burger-menu" aria-label="Открыть меню">
        <span></span>
        <span></span>
        <span></span>
     
        
  
    </button>

      <div className= {menu ? "card-menu":"hidden"}>
        
        <button className='button-menu'
        onClick={() =>deleteCard(card.id)}>
            Delete</button>
        <button className='button-menu'
        onClick={() => {
            
            addToFavorite(card.id)
            changeFav()

        }}>
            Favourites
            </button>
            <button  className='button-menu' onClick={() => openModal(card.id)}>Edit</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
           
         
            <form onSubmit={handleEdit} className='form'>
              <input name="title" defaultValue={currentCard.title} required />
              <textarea className='text' name="description" defaultValue={currentCard.description} required />
              <button type="submit" className='button-form'>Save</button>
              </form>
              <span className="close" onClick={closeModal}>&times;</span>
            <h2>Edit Card</h2>
            
          </div>
        </div>
      )}
    </div>
  )
};


