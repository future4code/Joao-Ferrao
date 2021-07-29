import React from "react";
import styled from 'styled-components';


const Formulario = styled.form `
    background-color: grey;
    color: whitesmoke;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 40vh;
    padding: 10px;
    margin: 25px;
    

`


export default class Etapa2 extends React.Component {
  state = {
    
  };

  render(){


    return (
      <div>
        <Formulario>
                <label for="curso">Qual o Curso?</label>
                <input type="text"></input>
                <label for="instituicao">Instituição de Ensino</label>
                <input type="text"></input>
                
            </Formulario>
      </div>

    );
  }
}