import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import './Collections.css'; // Assurez-vous d'importer le fichier CSS
import Recherche from './Recherche';

function Collection({ collection, name }) {
  const [items, setItems] = useState(collection);
  const [showModal, setShowModal] = useState(false);

  const switchModal = () => {
    setShowModal(!showModal);
  };
  const addItem = (item) => {
    setItems([...items, item]);
  };


  return (
    <div className='collection'>
      <h2 className='titre_collection'>{name}</h2>   
      <Reorder.Group axis="x" onReorder={setItems} values={items} className="reorder-group">
        {items.map((item) => (
          <Reorder.Item key={item.id} value={item} className="reorder-item">
            <div className='card'>
            <button className='card-button' onClick={() => setItems(items.filter(i => i.id !== item.id))}>x</button>
            <img 
                className='image-card'
                src={item.url} 
                alt={`Item ${item.id}`} 
                onDragStart={(e) => e.preventDefault()} // Désactive le glisser-déposer natif
              />
              <p className='texte-card'>Item {item.id}</p>
            </div>
          </Reorder.Item>
        ))}
        <div className='add-card' onClick={switchModal}>+</div>
      </Reorder.Group>
      <div>{showModal && <Recherche showModal={showModal} addItem={addItem}/>}</div>
    </div>
  );
}

export default Collection;