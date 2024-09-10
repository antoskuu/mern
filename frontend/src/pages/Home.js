import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import fondImage from './fond.jpg'; // Importez l'image
import fleche from './fleche.png'; // Importez l'image
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importez les styles de Leaflet

const Home = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sendAt, setSendAt] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Arrête la propagation de l'événement de clic
    setIsClicked(!isClicked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/emails/schedule', { email, subject, body, sendAt });
      alert('Email scheduled successfully');
    } catch (error) {
      console.error('Error scheduling email:', error);
      alert('Error scheduling email');
    }
  };

  return (
    <div className='page'>
      <h1 className='titre'>Votre capsule</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="Enter body" 
          className="custom-input"
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          required 
        />
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
        <input 
          type="datetime-local" 
          value={sendAt} 
          onChange={(e) => setSendAt(e.target.value)} 
          required 
        />
      </form>
      <button onClick={handleSubmit} className="send-button">
      <div onClick={handleImageClick} className={`image-logo ${isClicked ? 'clicked' : ''}`}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "300px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
        <img onClick={handleImageClick} className={`image-logo ${isClicked ? 'clicked' : ''}`} src={fondImage} alt="Icon" />
        <div className="button-text">
          <span className="main-text">Envoyer la capsule</span>
          <span className="sub-text">
            {sendAt ? `Prévu pour le ${sendAt}` : "Date à définir"}
          </span>            
        </div>
        <img className="fleche" src={fleche} alt="Fleche" />
      </button>
      
    </div>
  );
}

export default Home;