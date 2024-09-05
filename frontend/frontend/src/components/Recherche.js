import React, { useState, useEffect, useRef } from 'react';
import './Recherche.css';

const Recherche = ({ showModal, addItem }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [resultats, setResultats] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const [type, setType] = useState('artist');

    useEffect(() => {
        if (showModal && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showModal]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            setLoading(true);
            handleSearch(value);
        } else {
            setResultats([]);
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
        setResultats([]);
    };

    const handleSearch = (query) => {
        const rechercher = async (query) => {
            const apiUrl = process.env.REACT_APP_API_KEY;
            console.log(apiUrl);
            if (type === 'artiste') {
                fetch('https://api.deezer.com/artist/nekfeu', { mode: 'no-cors' })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error));
                return;
            }
            if (type === 'album') {
            fetch(`https://api.deezer.com/album/${query}`)
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
                return;        }};

        rechercher(query);
    };

    const handleItemClick = (album) => {
        const imageUrl = album.image.find(img => img.size === 'large')['#text'];
        const newItem = {
            id: album.mbid || album.name, // Use mbid if available, otherwise use name
            url: imageUrl,
            name: album.name
        };
        addItem(newItem);
    };

    const changeType = (type) => {
        setType(type);
    };

    return (
        <div className='page'>
            <div className="search-container">
                <input
                    ref={inputRef}
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
                    <button className='button-type'>Tout</button>
                    <button className='button-type'onClick={() => changeType('artiste')}>Artiste</button>
                    <button className='button-type' onClick={() => changeType('album')}>Album</button>

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
                    .filter(artist => {
                        const imageUrl = artist.picture; // or use artist.picture, artist.picture_small, artist.picture_big, artist.picture_xl based on your requirement
                        console.log('Filtering artist:', artist); // Debug log
                        return imageUrl && imageUrl.trim() !== '';
                    })
                    .map((artist, index) => {
                        const imageUrl = artist.picture; // or use artist.picture, artist.picture_small, artist.picture_big, artist.picture_xl based on your requirement
                        console.log('Mapping artist:', artist); // Debug log
                        return (
                            <div className='card-recherche' key={index} onClick={() => handleItemClick(artist)}>
                                <p>{imageUrl}</p>
                                <img className='image-card' src={imageUrl} alt={artist.name} />
                                <div className='texte-card'>{artist.name}</div>
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

export default Recherche;