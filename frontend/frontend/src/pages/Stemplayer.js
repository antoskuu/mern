import React, { useState } from 'react';
import Slider from '../components/Slider';

const StemPlayer = () => {
  // Définir les états pour chaque slider
  const [bassValue, setBassValue] = useState(50);
  const [trebleValue, setTrebleValue] = useState(50);
  const [midValue, setMidValue] = useState(50);
  const [volumeValue, setVolumeValue] = useState(50);

  // Fonctions pour gérer les changements de chaque slider
  const handleBassChange = (newValue) => {
      setBassValue(newValue);
  }

  const handleTrebleChange = (newValue) => {
      setTrebleValue(newValue);
  }

  const handleMidChange = (newValue) => {
      setMidValue(newValue);
  }

  const handleVolumeChange = (newValue) => {
      setVolumeValue(newValue);
  }

  return (
      <div>
          <Slider value={bassValue} onChange={handleBassChange} />
          <h4>Basses: {bassValue}</h4>
          <Slider value={trebleValue} onChange={handleTrebleChange} />
          <h4>Treble: {trebleValue}</h4>
          <Slider value={midValue} onChange={handleMidChange} />
          <h4>Mids: {midValue}</h4>
          <Slider value={volumeValue} onChange={handleVolumeChange} />
          <h4>Volume: {volumeValue}</h4>
      </div>
  );
}

export default StemPlayer;