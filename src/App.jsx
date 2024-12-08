import React, { useState } from 'react';
import ZodiacContainer from './assets/ZodiacContainer.jsx';
import ZodiacDetails from './assets/ZodiacDetails.jsx';
import zodiacData from './assets/zodiacData.js';
import './index.css'; // Global styles

function App() {
  const [selectedSign, setSelectedSign] = useState(null);

  const handleSignClick = (sign) => {
    setSelectedSign(sign);
  };

  const handleBackClick = () => {
    setSelectedSign(null);
  };

  return (
    <div className="App">
      {selectedSign ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <ZodiacDetails sign={selectedSign.sign} details={selectedSign.details} />
        </div>
      ) : (
        <div className="zodiac-grid">
          {zodiacData.map((zodiac, index) => (
            <ZodiacContainer
              key={index}
              sign={zodiac.sign}
              coverImage={zodiac.coverImage}
              onClick={() => handleSignClick(zodiac)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
