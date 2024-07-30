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
      const apiUrl = process.env.REACT_APP_API_KEY;
      console.log(apiUrl);
      fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${apiUrl}&format=json`)
        .then(response => response.json())
        .then(json => {
          const albums = json.results.albummatches.album || [];
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
        {resultats.length > 0 ? (
          <div>
            {resultats.map((album, index) => (
              <div key={index}>
                <h3>{album.name} by {album.artist}</h3>
                <img src={album.image.find(img => img.size === 'large')['#text']} alt={album.name} />
              </div>
            ))}
          </div>
        ) : (
          resultats.length === 0 ? 'No results found' : 'Loading...'
        )}
      </div>
    </div>
  );
};

export default Recherche;