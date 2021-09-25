import React from 'react'
import Candidates from '../Components/Candidates'
import TripInfo from '../Components/TripInfo'
import styled from 'styled-components'


const ContainerContent = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
`
export const TripDetailsPage = () => {
    return (
        <ContainerContent>
            <p>Trip Details</p>
            <TripInfo />
            <Candidates />
        </ContainerContent>
    )
}
