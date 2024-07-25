import React, { useState } from 'react';

const Suivi = () => {
  // État initial pour les habitudes
  const [habits, setHabits] = useState([]);

  // Ajouter une nouvelle habitude
  const addHabit = () => {
    const newHabit = {
      id: habits.length + 1, // Utiliser un identifiant plus robuste dans une application réelle
      name: `Habitude ${habits.length + 1}`,
      checked: false,
    };
    setHabits([...habits, newHabit]);
  };

  // Gérer le changement de l'état des checkboxes
  const handleOnChange = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, checked: !habit.checked } : habit
    ));
  };

  return (
    <div>
      <h1>Suivi habitudes</h1>
      <button onClick={addHabit}>Ajouter une habitude</button>
      {habits.map((habit) => (
        <div key={habit.id}>
          <input
            type="checkbox"
            id={`habit-${habit.id}`}
            name={`habit-${habit.id}`}
            checked={habit.checked}
            onChange={() => handleOnChange(habit.id)}
          />
          <label htmlFor={`habit-${habit.id}`}>{habit.name}</label>
          <h4>delete</h4>
        </div>
      ))}
    </div>
  );
};

export default Suivi;