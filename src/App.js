import { FiSearch } from 'react-icons/fi';

import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Buscador de CEP</h1>
            <div className="cep-container">
                <input type="text" placeholder="Digite seu CEP..." name="cep" />
                <button type="submit">
                    <FiSearch size={25} color="#FFF" />
                </button>
            </div>
            <div className="info-container">
                <h3>CEP: 04815-030</h3>
                <p>Rua Justino Nigro 449</p>
                <p>Interlagos</p>
                <p>São Paulo - SP</p>
                <p>Brasil</p>
            </div>
        </div>
    );
}

export default App;
