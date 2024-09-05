import React, { useState, useEffect, useRef } from 'react';
import './Recherche.css';

const Recherche2 = ({ showModal, addItem }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (showModal && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showModal]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            addItem({ id: Date.now(), name: searchTerm });
            setSearchTerm('');
        }
    };

    return (
        <div className='page'>
            <div className="search-container">
                <input
                    ref={inputRef}
                    className='searchbar'
                    type="text"
                    placeholder="Taper ingrédients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>
    );
};

export default Recherche2;