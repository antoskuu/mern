import React, { useState } from 'react';
import './Autre.css';

import Collections2 from '../components/Collections2.js'
import Recherche from '../components/Recherche.js';

const Autre = () => {
  

  return (
    <div className='page'>
      <h1>Page d'accueil</h1>
      
      



      
      <Collections2 collection={[
      ]} name='Collection 1' />


    </div>
  );
}

export default Autre;