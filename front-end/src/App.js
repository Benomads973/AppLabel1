import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData } from './providers/manifest'

function App() {
  const [client, setClient] = useState({"username": "", "appname": "", "password": "", "org": "", "logo": "" });
  (async () => {
    if(client.username === '') {
      const payload = await getData()
      setClient(payload)
    }
  })()
  return (
    <div className="App">
      <header className="App-header">
        <img src={!!client.logo ? client.logo : logo } className="App-logo" alt="logo" />
        <p>
          Bienvenu de la part de l'equipe de chez {client.org} sur {client.appname} je suis {client.username}
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
