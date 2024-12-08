// src/assets/ZodiacContainer.jsx
import React from 'react';

function ZodiacContainer({ sign, coverImage, onClick }) {
  return (
    <div className="zodiac-container" onClick={onClick}>
      <img src={coverImage} alt={`${sign} cover`} />
      <h3>{sign}</h3>
    </div>
  );
}

export default ZodiacContainer;
