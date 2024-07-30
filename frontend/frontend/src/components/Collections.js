import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import './Collections.css'; // Assurez-vous d'importer le fichier CSS

function Collection({ collection }) {
  const [items, setItems] = useState(collection);

  return (
    <Reorder.Group axis="x" onReorder={setItems} values={items} className="reorder-group">
      {items.map((item) => (
        <Reorder.Item key={item.id} value={item} className="reorder-item">
          <div className='Card'>
          <img 
            src={item.url} 
            alt={`Item ${item.id}`} 
            onDragStart={(e) => e.preventDefault()} // Désactive le glisser-déposer natif
          />
          <p>Item {item.id}</p>
          </div>
        </Reorder.Item>
      ))}
      <div className='add-card'>+</div>
    </Reorder.Group>
    
  );
}

export default Collection;

/* collection: [
    { id: 1, url: 'https://via.placeholder.com/150' },
    { id: 2, url: 'https://via.placeholder.com/150' },
    { id: 3, url: 'https://via.placeholder.com/150' }
  ]
 */