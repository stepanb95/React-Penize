import React, { useState } from 'react';
import './DPH.css';

function DPH() {
  const [cenaBezDPH, setCenaBezDPH] = useState('');
  const [sazbaDPH, setSazbaDPH] = useState('');
  const [vysledek, setVysledek] = useState(null);

  const vypocitejDPH = () => {
    const cena = parseFloat(cenaBezDPH);
    const sazba = parseFloat(sazbaDPH);
    if (!isNaN(cena) && !isNaN(sazba)) {
      const dph = cena * (sazba / 100);
      const cenaSDPH = cena + dph;
      setVysledek({
        dph,
        cenaSDPH,
      });
    }
  };

  return (
    <div className="container1">
      <h2>Výpočet DPH</h2>
      <div className="input-group">
        <label>
          Cena bez DPH:
          <input
            type="number"
            value={cenaBezDPH}
            onChange={(e) => setCenaBezDPH(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Sazba DPH (%):
          <input
            type="number"
            value={sazbaDPH}
            onChange={(e) => setSazbaDPH(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button className="button1" onClick={vypocitejDPH}>Vypočítej DPH</button>
      </div>
      {vysledek && (
        <div className="result">
          <h3>DPH:</h3>
          <p>{vysledek.dph.toFixed(2)} Kč</p>
          <h3>Cena s DPH:</h3>
          <p>{vysledek.cenaSDPH.toFixed(2)} Kč</p>
        </div>
      )}
    </div>
  );
}

export default DPH;
