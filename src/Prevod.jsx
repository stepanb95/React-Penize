import React, { useState } from 'react';
import './Prevod.css';

function PrevodMeny() {
  const [castka, setCastka] = useState('');
  const [mena, setMena] = useState('CZK');
  const [vysledek, setVysledek] = useState(null);

  const prevodMeny = () => {
    let novyVysledek;
    if (mena === 'CZK') {
      novyVysledek = {
        USD: (parseFloat(castka) / 21.50).toFixed(2),
        EUR: (parseFloat(castka) / 25.30).toFixed(2)
      };
    } else if (mena === 'USD') {
      novyVysledek = {
        CZK: (parseFloat(castka) * 21.50).toFixed(2),
        EUR: (parseFloat(castka) * 0.88).toFixed(2)
      };
    } else if (mena === 'EUR') {
      novyVysledek = {
        CZK: (parseFloat(castka) * 25.30).toFixed(2),
        USD: (parseFloat(castka) * 1.13).toFixed(2)
      };
    }
    setVysledek(novyVysledek);
  };

  return (
    <div className="container3">
      <h2>Převod měny</h2>
      <div className="input-group">
        <label>Částka:</label>
        <input type="number" value={castka} onChange={(e) => setCastka(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Měna:</label>
        <select value={mena} onChange={(e) => setMena(e.target.value)}>
          <option value="CZK">CZK</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          
        </select>
      </div>
      <div>
        <button className="button3" onClick={prevodMeny}>Převést</button>
      </div>
      {vysledek && (
        <div className="result">
          <h3>Výsledek:</h3>
          {Object.entries(vysledek).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default PrevodMeny;
