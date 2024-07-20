import React, { useState } from 'react';

const Test = () => {
  // Étape 1: Gérer l'état du formulaire
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
  });

  // Mettre à jour l'état avec les valeurs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Étape 2: Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    try {
      // Étape 3: Envoyer les données avec Fetch
      const response = await fetch('http://localhost:3333/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      // Traiter la réponse
      const result = await response.json();
      console.log(result);
      alert('Voiture ajoutée avec succès!');
    } catch (error) {
      console.error("Erreur lors de l'ajout de la voiture:", error);
      alert("Erreur lors de l'ajout de la voiture.");
    }
  };

  return (
    <div>
      <form id="carForm" onSubmit={handleSubmit}>
        <input type="text" name="make" placeholder="Marque" required value={formData.make} onChange={handleChange} />
        <input type="text" name="model" placeholder="Modèle" required value={formData.model} onChange={handleChange} />
        <input type="number" name="year" placeholder="Année" required value={formData.year} onChange={handleChange} />
        <button type="submit">Ajouter une voiture</button>
      </form>
      <h1>réponse:</h1>
    </div>
  );
};

export default Test;