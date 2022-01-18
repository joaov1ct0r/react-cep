import { FiSearch } from 'react-icons/fi';

import { useState } from 'react';

import api from '../services/api';

function CepContainer(props) {
    let [Cep, setCep] = useState('');

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

            props.onData(req.data);

            setCep('');
        } catch {
            alert('Erro');
            setCep('');
        }
    }

    return (
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
    );
}

export default CepContainer;
