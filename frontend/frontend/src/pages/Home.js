import React, { useState } from 'react';
import './Home.css';
import Collections from '../components/Collections.js'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [resultats, setResultats] = useState([]);
  const [loading, setLoading] = useState(false);
  const initialCollection1 = [
    { id: 1, url: 'https://via.placeholder.com/150' },
    { id: 2, url: 'https://via.placeholder.com/150' }
  ];
  
  const initialCollection2 = [
    { id: 3, url: 'https://via.placeholder.com/150' },
    { id: 4, url: 'https://via.placeholder.com/150' }
  ];
  
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      setShowModal(true);
      setLoading(true);
      handleSearch(value);
    } else {
      setShowModal(false);
      setResultats([]);
    }
  };

  const toggleModal = () => {
    setShowModal(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowModal(false);
    setResultats([]);
  };

  const handleSearch = (query) => {
    const rechercher = async (query) => {
      const apiUrl = process.env.REACT_APP_API_KEY;
      console.log(apiUrl);
      fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${apiUrl}&format=json`)
        .then(response => response.json())
        .then(json => {
          const albums = json.results.albummatches.album || [];
          setResultats(albums);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    };

    rechercher(query);
  };

  return (
    <div className='page'>
      <h1>Page d'accueil</h1>
      <div className='collections'>
      <h2 className='titre_collection'>Mes collections</h2>



      
      <Collections collection={[
    { id: 1, url: 'https://lastfm.freetls.fastly.net/i/u/174s/6b13b3feae253eb8f378f54b1bb5b7e9.png' },
    { id: 2, url: 'https://lastfm.freetls.fastly.net/i/u/174s/5f81c5dd81c3ae5259c3233bfa303a52.png' },
    { id: 3, url: 'https://lastfm.freetls.fastly.net/i/u/174s/f23d408be0030ec79a6ba881461f22a6.png"' }
      ]}
  />

      </div>
      <div className='collections'>
      <h2 className='titre_collection'>Mes collections</h2>


      
      <Collections collection={[
    { id: 1, url: 'https://lastfm.freetls.fastly.net/i/u/174s/6b13b3feae253eb8f378f54b1bb5b7e9.png' },
    { id: 2, url: 'https://lastfm.freetls.fastly.net/i/u/174s/5f81c5dd81c3ae5259c3233bfa303a52.png' },
    { id: 3, url: 'https://lastfm.freetls.fastly.net/i/u/174s/f23d408be0030ec79a6ba881461f22a6.png"' }
      ]}
  />
  

      </div>
      






      <div className="search-container">
        <input
          className='searchbar'
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button className="clear-button" onClick={clearSearch}>
            &times;
          </button>
        )}
      </div>
      {showModal && (
        <div className="modal">
          <button>Tout</button>
          <button>Artiste</button>
          <button>Album</button>

          <div className="modal-content">
            <h2>Mini Page</h2>
            <p>Ceci est une mini page dans une modal.</p>
            <div>
              {loading ? (
                <div className="loading">Loading...</div>
              ) : (
                resultats.length > 0 ? (
                  <div className='resultats'>
                    {resultats
                      .filter(album => {
                        const imageUrl = album.image.find(img => img.size === 'large')['#text'];
                        return imageUrl && imageUrl.trim() !== '';
                      })
                      .map((album, index) => {
                        const imageUrl = album.image.find(img => img.size === 'large')['#text'];
                        return (
                          <div className='covername' key={index}>
                            <img className='albumcover' src={imageUrl} alt={album.name} />
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  'No results found'
                )
              )}
            </div>
          </div>
        </div>
        
      )}
    
    </div>
    
  );
};

export default Home;