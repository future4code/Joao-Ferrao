import React from "react"
import styled from "styled-components"
import axios from "axios"


const ContainetLikeButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 350px;
    
    

    & img {
        width: 56px;
        cursor: pointer;
        
    }
    
`

export default function LikeButton({
    idUser,
    getProfileToChoose
}) {

    const choosePerson = (choice) => {
        const user = "joao-ferrao-johnson"
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/choose-person`
        const body = {
            "id": idUser,
            choice
        }

        axios
            .post(url, body)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
                alert("Ocorreu um erro")
            })
    }


    return (
        <ContainetLikeButton>
            <a onClick={() => choosePerson(false)}>
                <img src="./images/cancel.png" alt="Dislike Button" />
            </a>
            <a onClick={() => choosePerson(true)}>
                <img src="./images/heart.png" alt="Like Button" />
            </a>
        </ContainetLikeButton>
    )
}


