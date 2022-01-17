import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import api from './services/api';

import './App.css';

function App() {
    let [Cep, setCep] = useState('');

    let [Data, setData] = useState({});

    function handleCep(event) {
        setCep(event.target.value);
    }

    async function handleClick() {
        if (Cep === '') {
            alert('Preencha algum CEP');
            return;
        }
        try {
            const req = await api.get(`${Cep}/json`);

            setData(req.data);

            setCep('');
        } catch {
            alert('Erro');
            setCep('');
        }
    }

    return (
        <div className="App">
            <h1>Buscador de CEP</h1>
            <div className="cep-container">
                <input
                    onChange={handleCep}
                    type="text"
                    placeholder="Digite seu CEP..."
                    name="cep"
                    value={Cep}
                />
                <button type="submit" onClick={handleClick}>
                    <FiSearch size={25} color="#FFF" />
                </button>
            </div>
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
