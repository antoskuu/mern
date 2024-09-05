import React, { useState } from 'react';
import Recherche2 from './Recherche2';
import { Reorder } from 'framer-motion';
import axios from 'axios';

const requestAI = (items, setResponse) => {
  const itemNames = items.map(item => item.name).join(', ');

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/chat",
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzhkNjYxNjQtYmZjMi00NmEyLTg1YjctYWE5Y2E2YWVkYjI4IiwidHlwZSI6ImFwaV90b2tlbiJ9.3Eh7GkKGlGeTAu18PINETAo1JG9HfvfiWIWluQzDcqM",
    },
    data: {
      providers: "openai/gpt-4o",
      text: `Donne une recette avec ces ingrédients, en ne donnant QUE la liste d'ingrédients et la recette: ${itemNames}`,
      chatbot_global_action: "You are a cooking expert. You are given a list of ingredients. Give me a recipe based on the informations.",
      previous_history: [],
      temperature: 0.0,
      max_tokens: 1000,
    },
  };

  axios
    .request(options)
    .then((response) => {
      setResponse(response.data["openai/gpt-4o"].generated_text);
    })
    .catch((error) => {
      console.error(error);
    });
};

function Collection({ collection, name }) {
  const [items, setItems] = useState(collection);
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState(null);

  const switchModal = () => {
    setShowModal(!showModal);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className='collection'>
      <h2 className='titre_collection'>{name}</h2>   
      <div className="reorder-group">
        {items.map((item) => (
          <div className="reorder-item" key={item.id}>
            <div className='card'>
              <button className='card-button' onClick={() => setItems(items.filter(i => i.id !== item.id))}>x</button>
              <p className='texte-card'>{item.name}</p>
            </div>
          </div>
        ))}
        <div className='add-card' onClick={switchModal}>+</div>
        <div className='search-button' onClick={() => requestAI(items, setResponse)}>
          Start
        </div>
      </div>
      <div>{showModal && <Recherche2 showModal={showModal} addItem={addItem}/>}</div>
      {response && (
        <div className='response'>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Collection;