function InfoContainer(props) {
    return (
        <div className="info-container">
            <h3>CEP: {props.Data.cep}</h3>
            <p>Logradouro: {props.Data.logradouro}</p>
            <p>Bairro: {props.Data.bairro}</p>
            <p>
                Cidade: {props.Data.localidade} - {props.Data.uf}
            </p>
        </div>
    );
}

export default InfoContainer;
