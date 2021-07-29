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


export default class Etapa3 extends React.Component {
  state = {
    
  };

  render(){


    return (
        <div>
            <Formulario>
                <label for="pq">Por que você não terminou um curso de graduação?</label>
                <input type="text"></input>
                <p>Você fez algum curso complementar?  </p>

                <input type="radio" id="CursoTecnico" value="CursoTecnico"></input>
                <label for="CursoTecnico">Curso Técnico</label>

                <input type="radio" id="Cursosdeingles" value="Cursosdeingles"></input>
                <label for="Cursosdeingles">Cursos de Inglês</label>

                <input type="radio" id="SemCurso" value="SemCurso"></input>
                <label for="SemCurso">Não fiz curso complementar</label>

            </Formulario>
        </div>

    );
  }
}