import React, { useState } from 'react';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>Page d'accueil</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Vos images ici */}
        <button onClick={toggleModal}>Ajouter un disque</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>&times;</span>
            <h2>Mini Page</h2>
            {/* Contenu de votre mini page ici */}
            <p>Ceci est une mini page dans une modal.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;