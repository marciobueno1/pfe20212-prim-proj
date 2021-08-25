import React from "react";
import "./App.css";

function Welcome({ nome }) {
  return <h1>Olá, {nome}</h1>;
}

function Welcome2(props) {
  const { usuario } = props;
  if (!usuario) {
    return <h1>Olá, Mundo!</h1>;
  }
  return (
    <h1>
      Olá, {usuario.nome}, você tem {usuario.idade} anos! <br />
      Você mora em {usuario.endereco.cidade}
    </h1>
  );
}

class Welcome3 extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}</h1>;
  }
}

function App() {
  const maria = {
    nome: "Maria",
    idade: 18,
    telefone: "3333-3333",
    endereco: {
      rua: "Rua Fulano de tal",
      numero: 33,
      cep: "33333-333",
      bairro: "São José",
      cidade: "Recife",
      estado: "PE",
    },
  };
  return (
    <div>
      <Welcome3 nome="Jõao" />
      <Welcome nome="José" />
      <Welcome2 usuario={maria} />
      <Welcome2 />
    </div>
  );
}

export default App;
