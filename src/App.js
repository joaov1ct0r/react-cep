import './App.css';

function App() {
    return (
        <div className="App">
            <div className="cep-container">
                <h1>Buscador CEP</h1>
                <input type="text" placeholder="Digite seu CEP..." name="cep" />
                <button type="submit">Procurar</button>
            </div>
        </div>
    );
}

export default App;
