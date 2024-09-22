import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // L'Etat pour stocker le nom de l'organisation
  const [org, setOrg] = useState([]);

  useEffect(() => {
    // Faire la requête vers l'API pour récupérer l'organisation
    fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) => setOrg(data.org)) // // Mettre à jour l'état avec l'info de l'API
      .catch((error) => {
        console.log("Erreur lors de la récupération des données :" + error)
        setOrg("Marque Blanche") // En cas de non existance de l'organisation, afficher Marque Blanche
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Le nom de l'organisation va être affiche ici : */}
        <h1>{org}</h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
