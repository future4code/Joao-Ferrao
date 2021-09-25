import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components';


const SpaceShip = styled.img`
    width: 400px;
    box-shadow: 1px 1px 4px 2px rgb(51,102,153);
    margin: 70px 0;

` 
const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(0,31,62);
    width: 100%;

    & p {
        font-size: 1.2em;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        letter-spacing: 2px;
        margin-top: 30px;
    }
`
const ContainerHome = styled.div`
    align-self: center;
    width: 70%;
    height: 90vh;
    display: flex;
    align-items: center;

    & div {
        background-color: rgba(51,102,153,.5);
        margin:0 15px ;
        color: white;
        padding: 15px;
        height: 250px;
        text-align: center;
        box-shadow: 1px 1px 4px 2px rgb(51,102,153);
        
    }
`

export const HomePage = () => {
    
    return (
        <MainContainer>
            <ContainerHome>
                <div>
                    <p>Somos a primeira empresa de viagens interplanetárias do NOSSO mundo!</p>
                    <p>Proporcionamos experiências incríveis! </p>
                </div>
                <SpaceShip src="./img/home.jpeg" alt="Nave" />
            </ContainerHome>
        </MainContainer>
    )
}
