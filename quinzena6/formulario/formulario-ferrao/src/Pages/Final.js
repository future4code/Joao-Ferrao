import React from "react";
import styled from 'styled-components';

const Paragrafo = styled.p `
    font-size: 2em;
    text-align: center;
    color: grey;
`

export default class Final extends React.Component {
  state = {
    
  };

  render(){


    return (
      <div>
        <Paragrafo>Obrigado Pela Sua Participação!</Paragrafo>
      </div>

    );
  }
}