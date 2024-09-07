import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sendAt, setSendAt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/emails/schedule', { email, subject, body, sendAt });
      alert('Email scheduled successfully');
    } catch (error) {
      console.error('Error scheduling email:', error); // Ajoutez cette ligne pour afficher l'erreur dans la console
      alert('Error scheduling email');
    }
  };

  return (
    <div className='page'>
      <h1>Schedule an Email</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Enter subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Enter body" 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          required 
        />
        <input 
          type="datetime-local" 
          value={sendAt} 
          onChange={(e) => setSendAt(e.target.value)} 
          required 
        />
        <button type="submit">Schedule Email</button>
      </form>
    </div>
  );
}

export default Home;