import React from 'react';
import styled from "styled-components";

const DivCardPequeno = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`
const TamanhoIcone = styled.img `
    width: 48px;
    height: 48px;
    
`
const AjusteTexto = styled.h3`
    margin: 0 4px;

`
function CardPequeno (props) {
    return (
        <DivCardPequeno>
            <TamanhoIcone src={ props.imagem }/>
            <AjusteTexto>{ props.titulo }</AjusteTexto>
            <p>{ props.texto}</p>
        </DivCardPequeno>
    )
} 

export default CardPequeno;