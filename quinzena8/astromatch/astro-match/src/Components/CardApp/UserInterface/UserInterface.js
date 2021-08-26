import React from "react"
import styled from "styled-components"
import axios from "axios"


const ContainerUser = styled.div`
    width: 358px;
    height: 426px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    
    
    
    & img{
        width: 100%;
        height: 100%;
        border: 1px solid black;
        align-self: center;
        border-radius: 15px;
        box-shadow: 4px 4px rgba(9,9,9,.6);
    }

`
const GetProfileToChoose = () => {
    const user = "joao-ferrao-johnson"
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/person`
    
    axios.get(url)
    
}

export default function UserInterface() {
    return (
        <ContainerUser>
            <img src="https://picsum.photos/200/300" />
        </ContainerUser>
    )
}
