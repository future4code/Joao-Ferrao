import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ResetButton = styled.button`
    background-color: rgb(0,217,224) ;
    color: rgba(0,0,0,0.3);
    border: .5px solid ;
    border-radius: 15px;
    box-shadow: 2px 3px 10px -2px rgba(0,0,0,0.5);
    margin-top: 15px;
`

const ResetMatches = (props) => {

    const clear = () => {
        const user = "joao-ferrao-johnson"
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/clear`

        axios
            .put(url)
            .then((res) => {
                props.getMatches()

            })
            .catch((err) => {
                alert("Ocorreu um erro")
            })
    }

    return (
        <div>
            <ResetButton onClick={clear}>Resetar Matches</ResetButton>
        </div>
    )
}

export default ResetMatches
