import React, { useEffect, useState } from 'react';

const Test = () => {
  const [students, setStudents] = useState([]);
  const [inputValue1, setInputValue1] = useState(''); // État pour gérer l'entrée de l'utilisateur
  const [inputValue2, setInputValue2] = useState(''); // État pour gérer l'entrée de l'utilisateur
  const [inputValue3, setInputValue3] = useState(''); // État pour gérer l'entrée de l'utilisateur



  useEffect(() => {
    fetch('http://localhost:3333/')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setInputValue1(value);
        break;
      case 'name':
        setInputValue2(value);
        break;
      case 'password':
        setInputValue3(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Envoyer les données à l'API
    fetch('http://localhost:3333/', { // Remplacez '/api/endpoint' par votre point de terminaison spécifique
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: inputValue1, name: inputValue2, password: inputValue3  }), // Assurez-vous que la structure de l'objet correspond à ce que votre backend attend
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Vous pouvez ici rafraîchir la liste des étudiants ou gérer la réponse comme vous le souhaitez
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <input
  type="text"
  name="email"
  value={inputValue1}
  onChange={handleInputChange}
/>
<input
  type="text"
  name="name"
  value={inputValue2}
  onChange={handleInputChange}
/>
<input
  type="password" // Utilisez type="password" pour le champ de mot de passe pour une meilleure sécurité
  name="password"
  value={inputValue3}
  onChange={handleInputChange}
/>
      <button onClick={handleSubmit}>Envoyer</button>
      <h1>réponse:</h1>
    </div>
  );
};

export default Test;