import { useState } from 'react';

import CepContainer from './components/CepContainer';

import InfoContainer from './components/InfoContainer';

import './App.css';

function App() {
    let [Data, setData] = useState({});

    function handleData(data) {
        setData(data);
    }

    return (
        <div className="App">
            <h1>Buscador de CEP</h1>
            <CepContainer onData={handleData}></CepContainer>
            <InfoContainer Data={Data}></InfoContainer>
        </div>
    );
}

export default App;
