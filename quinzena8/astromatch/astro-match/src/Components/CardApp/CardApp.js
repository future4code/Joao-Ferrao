import React, { useState } from "react"
import styled from 'styled-components';
import HeaderCard from "./HeaderCard/HeaderCard";
import UserInterface from "./UserInterface/UserInterface";
import MyMatches from "./MyMatches/MyMatches"



const ContainerCardApp = styled.div`
    display: flex;
    width: 400px;
    height: 600px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 2px 3px 10px -2px rgba(0,0,0,0.9);
    margin-top: 25px;

`



const CardApp = () => {
    const [showMyMatches, setShowMyMatches] = useState(false)

    return (
        <ContainerCardApp>
            <HeaderCard setShowMyMatches={setShowMyMatches} showMyMatches={showMyMatches} />

            {showMyMatches ? (
                <MyMatches />
            ) : (
                <UserInterface />
            )}
        </ContainerCardApp>
    )
}

export default CardApp
