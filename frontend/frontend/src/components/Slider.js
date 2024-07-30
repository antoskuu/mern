import React from 'react';

const Slider = ({ value, onChange }) => {
    return (
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
      );
}

export default Slider;