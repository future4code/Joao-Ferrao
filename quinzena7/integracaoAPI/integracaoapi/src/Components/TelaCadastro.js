import React from "react";
import axios from "axios"

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",

  };

  handleNome = (e) => {
  this.setState({ nome: e.target.value })
}
handleEmail = (e) => {
  this.setState({ email: e.target.value })
}

fazerCadastro = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const body = {
    name: this.state.nome,
    email: this.state.email
  }

  axios.post(url, body, {
    headers: {
      Authorization: "joao-ferrao-johnson"
    }
  })
  .then((res) => {
    alert("Usuário(a) cadastrado com sucesso!")
    this.setState({nome: "", email: ""})
  })
  .catch((err) => {
    alert(err.response.data.message)
  })
}


render(){


  return (
    <div>
      <button onClick={this.props.irParaLista}>Lista de Usuários</button>
      <h2>Criar Usuários</h2>
      <input
        placeholder={"Nome"}
        value={this.state.nome}
        onChange={this.handleNome}
      />
      <input
        placeholder={"E-mail"}
        value={this.state.email}
        onChange={this.handleEmail}
      />
      <button onClick={this.fazerCadastro}>Cadastrar</button>
    </div>

  );
}
  }