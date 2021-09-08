import React from 'react';
import styled from 'styled-components'
import axios from 'axios';


const ContainerHeader = styled.div`
    height: 60px;
    border-bottom: 2px solid rgba(136,136,136,.6);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    
`
const DivLogo = styled.div`
    height: 48px;
      

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
}

`
const DivMatches = styled.div`
    height: 48px;
    width: 48px;
    cursor: pointer;
    
    & :hover{
        height: 52px;
        width: 52px;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        
  }

`
const HeaderCard = ({ setShowMyMatches, showMyMatches }) => {
    return (
        <ContainerHeader>
            <DivLogo>
                <img src="./Images/logo.png" alt="logo" />
            </DivLogo>

            {showMyMatches ? (
                <DivMatches onClick={() => setShowMyMatches(false)}>
                    <img src="./Images/left.png" alt="Voltar" />
                </DivMatches>
            ) : (
                <DivMatches onClick={() => setShowMyMatches(true)}>
                    <img src="./Images/love2.png" alt="Mostrar matches" />
                </DivMatches>
            )}
        </ContainerHeader>
    )
}

export default HeaderCard
