import React from "react"
import styled from 'styled-components';
import DisLikeButton from "./DisLikeButton/DisLikeButton";
import HeaderCard from "./HeaderCard/HeaderCard";
import LikeButton from "./LikeButton/LikeButton";
import UserInterface from "./UserInterface/UserInterface";



const ContainerCardApp = styled.div`
    display: flex;
    width: 400px;
    height: 600px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 20px;
    width: 100%;
`


const CardApp = () => {
    return (
        <ContainerCardApp>
            <HeaderCard />
            <UserInterface />
            <Buttons>
                <DisLikeButton />
                <LikeButton />
            </Buttons>

        </ContainerCardApp>
    )
}

export default CardApp
