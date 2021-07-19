import React from 'react';
import styled from "styled-components";

const ContainerGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const ImagemContainerGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Nome = styled.h4`
    margin-bottom: 15px;
`;

const DivContainerGrande = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <ContainerGrande>
            <ImagemContainerGrande src={ props.imagem } />
            <DivContainerGrande>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </DivContainerGrande>
        </ContainerGrande>
    )
}

export default CardGrande;