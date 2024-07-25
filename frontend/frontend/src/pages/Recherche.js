import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Recherche = () => {
  const location = useLocation();
  const [resultats, setResultats] = useState([]);
  const [termDeRecherche, setTermDeRecherche] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    setTermDeRecherche(query);

    const rechercher = async (query) => {
      fetch(`https://www.theaudiodb.com/api/v1/json/2/discography.php?s=${query}`)
        .then(response => response.json())
        .then(json => {
          // Supposons que l'API retourne un objet avec un tableau sous la clé 'album'
          // Ajustez cette partie en fonction de la structure réelle de votre réponse
          const albums = json.album || []; // Utilisez une clé qui existe dans votre réponse
          setResultats(albums);
        })
        .catch(error => console.error(error));
    };

    if (query) {
      rechercher(query);
    }
  }, [location]);

  return (
    <div>
      <h2>Résultats de recherche pour: {termDeRecherche}</h2>
      
      <div>
        {resultats.length > 0 ? (<pre>{JSON.stringify(resultats, null, 2)}</pre>): resultats.length===0?('No results found'):( 'Loading...')}
      </div>
    </div>
  );
};

export default Recherche;