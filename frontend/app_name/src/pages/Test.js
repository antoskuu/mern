import React, { useEffect, useState } from 'react';

const Test = () => {
  const [students, setStudents] = useState([]);
  const [inputValue, setInputValue] = useState(''); // État pour gérer l'entrée de l'utilisateur

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
    setInputValue(e.target.value); // Mettre à jour l'état avec la valeur de l'entrée
  };

  const handleSubmit = () => {
    // Envoyer les données à l'API
    fetch('http://localhost:3333/', { // Remplacez '/api/endpoint' par votre point de terminaison spécifique
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: inputValue }), // Assurez-vous que la structure de l'objet correspond à ce que votre backend attend
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
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <button onClick={handleSubmit}>Envoyer</button>
      <h1>réponse:</h1>
      <div>
        {students.map(student => (
          <div key={student._id}>
            <p>{student.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;