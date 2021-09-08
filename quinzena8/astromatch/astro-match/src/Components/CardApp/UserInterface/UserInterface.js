import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import LikeButton from "./LikeButton/LikeButton"


const ContainerCardUser = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    position: relative;
    height: 580px;
    padding-top: 20px;
`
const ContainerPic = styled.div`
    width: 350px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    align-self: center;
    position: relative;
    
    & img{
        width: 100%;
        height: 100%;
        border: 1px solid black;
        align-self: center;
        border-radius: 15px;
        box-shadow: 2px 2px rgba(9,9,9,.6);
    }
    
    `
const ContainerDescription = styled.div`
        width: 100%;
        background-color: rgba(9,9,9,.7);
        border-radius: 15px;
        color: whitesmoke;
        position: absolute;
        bottom: 0;
        height: auto;
        align-self: center;
    
        & h4{
            margin-bottom: 0;
            padding: 0 20px ;
        }
        & p {
            margin-top: 3px;
            width: 95%;
            padding: 0 10px ;
    
        }
    
    
    `

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    width: 100%;
`


export default function UserInterface() {

    const [profile, setProfile] = useState("")
    const [idUser, setIdUser] = useState("")

    const getProfileToChoose = () => {
        const user = "joao-ferrao-johnson"
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/person`

        axios
            .get(url)
            .then((res) => {
                setProfile(res.data.profile)
                setIdUser(res.data.profile.id)

            })
            .catch((err) => {
                alert("Ocorreu um erro")
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <ContainerCardUser>
            <ContainerPic>
                <img src={profile.photo} />

                <ContainerDescription>
                    <h4>{profile.name}, {profile.age}</h4>
                    <p>{profile.bio}</p>
                </ContainerDescription>
            </ContainerPic>
            <Buttons>
                <LikeButton idUser={idUser} getProfileToChoose={getProfileToChoose} />
            </Buttons>

        </ContainerCardUser>
    )
}
