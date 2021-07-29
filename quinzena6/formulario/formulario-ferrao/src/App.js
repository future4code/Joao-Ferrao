import './App.css';
import React from "react";
import styled from 'styled-components';
import Etapa1 from './Pages/Etapa1';
import Etapa2 from './Pages/Etapa2';
import Etapa3 from './Pages/Etapa3';
import Final from './Pages/Final';

const Botao = styled.button `
  font-size: 1em;
  border: 1px solid grey;
  background-color: grey;
  color: whitesmoke;
  cursor: pointer;
  width: 30vh;
  
`

const ContainerPagina = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <Final />;



    }
  }
  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });

  }

  render() {


    return (
      <ContainerPagina>
        <p></p>
        {this.renderizaEtapa()}
        <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao>
      </ContainerPagina>

    );
  }
}
