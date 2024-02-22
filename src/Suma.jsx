import React, { useState } from 'react';
import './App.css';

function Suma() {
  const [penize, setPenize] = useState(0);
  const [historie, setHistorie] = useState([]);

  const handlePridej = (event) => {
    event.preventDefault();
    const hodnota = parseInt(event.target.elements.hodnota.value);
    const kategorie = event.target.elements.kategorie.value;
    if (!isNaN(hodnota)) {
      setPenize(penize + hodnota);
      setHistorie(prevHistorie => [...prevHistorie, `Přičteno: ${hodnota} Kč, Kategorie: ${kategorie}`]);
    }
  };

  const handleSniz = (event) => {
    event.preventDefault();
    const hodnota = parseInt(event.target.elements.hodnota.value);
    if (!isNaN(hodnota)) {
      setPenize(penize - hodnota);
      setHistorie(prevHistorie => [...prevHistorie, `Odečteno: ${hodnota} Kč`]);
    }
  };

  return (
    <div className="container1">
      <h1 className="nadpis">Správa peněz</h1>
      <p>Aktuální stav: {penize} Kč</p>
      <form onSubmit={handlePridej} className="form">
        <input type="number" name="hodnota" className="input" />
        <select name="kategorie" className="select">
          <option value="dum">Dům</option>
          <option value="sport">Sport</option>
          <option value="hry">Hry</option>
        </select>
        <button type="submit" className="button">Přidat peníze</button>
      </form>
      <form onSubmit={handleSniz} className="form">
        <input type="number" name="hodnota" className="input" />
        <button type="submit" className="button">Odebrat peníze</button>
      </form>
      <div className="historieBox">
        <h2>Historie transakcí</h2>
        {historie.length > 0 ? (
          historie.map((zmena, index) => <div key={index}>{zmena}</div>)
        ) : (
          <p>Žádné transakce.</p>
        )}
      </div>
    </div>
  );
}

export default Suma;
