import React, { useState } from 'react';
import "./postcard.css";

export const PostCard = ({ card, addToFavorite, deleteCard, onEdit }) => {
    const [menu, setMenu] = useState(false);
    const [favCard, setFavCard] = useState(card.favorite);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedCard, setEditedCard] = useState({card}); 

    const changeFav = () => {
        setFavCard(!favCard);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditChange = (e) => {
        setEditedCard({...editedCard, [e.target.name]: e.target.value});
    }

    const handleSaveEdit = (e) => {
        e.preventDefault();
        onEdit(card.id, editedCard);
        closeModal();
    };

    return (
        <div className={favCard ? "favoritecard" : "postcard"}>
            <h2 className="title">{card.title}</h2>
            <div className="description">{card.description}</div>

            <button onClick={() => setMenu(!menu)} className="burger-menu" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={menu ? "card-menu" : "hidden"}>
                <button className='button-menu' onClick={() => deleteCard(card.id)}>Delete</button>
                <button className='button-menu' onClick={() => {
                    addToFavorite(card.id);
                    changeFav();
                }}>
                    Favorite
                </button>
                <button className='button-menu' onClick={openModal}>Edit</button>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                       
                        <form onSubmit={handleSaveEdit} className='form'>
                            <input type="text" name="title" value={editedCard.title} onChange={handleEditChange} required />
                            <textarea className='text' name="description" value={editedCard.description} onChange={handleEditChange} required />
                            <button type="submit" className='button-form'>Save</button>
                        </form>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Edit Card</h2>
                    </div>
                </div>
            )}
        </div>
    );
};