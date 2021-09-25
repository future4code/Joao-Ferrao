import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const ContainerAdmin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,31,62);
    width: 100%;
    padding-bottom: 60px;

    & div {
        display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(102,153,204,.7);
    width: 500px;
    height: 40vh;
    justify-content: space-evenly;
    border-radius: 5px;
    align-self: center;
    margin-top: 50px;
    }
    & h2 {
        letter-spacing: 3px;
        text-transform: uppercase;
        color: white;
        font-size: 30px;
        margin-bottom: 25px;
    }

`



export default function AdminHomePage() {
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }
    return (
        <ContainerAdmin>
            <div>
            <h2>Area do Administrador</h2>
            <button>Administrar Viagens</button>
            <button onClick={goToCreateTripPage}>Criar uma Viagem</button>
            </div>
        </ContainerAdmin>
    )
}
