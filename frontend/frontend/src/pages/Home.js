import React, { useState } from 'react';
import './Home.css';
import Collections from '../components/Collections.js'
import Recherche from '../components/Recherche.js';

const Home = () => {
  

  return (
    <div className='page'>
      <h1>Page d'accueil</h1>
      
      



      
      <Collections collection={[
    { id: 'je teste voir si ca depasse ou pas n ros', url: 'https://lastfm.freetls.fastly.net/i/u/174s/6b13b3feae253eb8f378f54b1bb5b7e9.png' },
    { id: 2, url: 'https://lastfm.freetls.fastly.net/i/u/174s/5f81c5dd81c3ae5259c3233bfa303a52.png' },
    { id: 3, url: 'https://lastfm.freetls.fastly.net/i/u/174s/f23d408be0030ec79a6ba881461f22a6.png"' }
      ]} name='Collection 1' />


    </div>
  );
}

export default Home;