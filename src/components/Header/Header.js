import './header.style.css'
import './header1440.css'
import Modal from 'react-modal';


import React, { useState } from 'react';


export const Header = () => {


const customStyles = {
  content: {
    zIndex:'100',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex:'100',
  },
};



const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <header className="header-wrapper">
     <div className="header-logo">ALEXANDER</div>
     <div className="header-menu">
      <div className="header-menu-item">Home  </div>
      <div className="header-menu-item">About Me  </div>
      <div className="header-menu-item">Portfolio  </div>
      <div className="header-menu-item">Services  </div></div>
    

      <button id="second-button" className="header-contact" onClick={openModal}>Contact me</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact me"
      >
        <h2>Contact me</h2>
        <p>Telefone: +7 (XXX) 448-00-56</p>
        <p>Email: Sanek4100gmail.com</p>
        <button onClick={closeModal}>close</button>
      </Modal>
       </header>
   
    
    
      
    
  )
};
