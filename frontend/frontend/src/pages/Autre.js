import React, { useState } from 'react';

const Autre = () => {
  // Initialiser l'état avec un tableau vide
  const [elements, setElements] = useState([]);

  // Fonction pour ajouter un nouvel élément
  const addTimeCount = () => {
    const newElement = {
      id: elements.length + 1, // Générer un ID simple (à améliorer pour une application réelle)
      date: new Date().toISOString(), // Utiliser la date et l'heure actuelles
    };
    setElements([...elements, newElement]); // Ajouter le nouvel élément au tableau
  };

  return (
    <div>
      <h1>Autre page</h1>
      <button onClick={addTimeCount}>Ajouter timecount</button>
      <ul>
        {elements.map((element) => (
          <li key={element.id}>{`ID: ${element.id}, Date: ${element.date}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autre;