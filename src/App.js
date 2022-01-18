import { useState } from 'react';

import CepContainer from './components/CepContainer';

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

            {Object.keys(Data).length > 0 && (
                <div className="info-container">
                    <h3>CEP: {Data.cep}</h3>
                    <p>Logradouro: {Data.logradouro}</p>
                    <p>Bairro: {Data.bairro}</p>
                    <p>
                        Cidade: {Data.localidade} - {Data.uf}
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
