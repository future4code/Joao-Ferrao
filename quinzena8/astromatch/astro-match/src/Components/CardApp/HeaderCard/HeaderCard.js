import React from 'react';
import styled from 'styled-components'


const ContainerHeader = styled.div`
    height: 50px;
    border-bottom: 2px solid lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & img{
        width: 90px;
        height: 50px;
    }
    
`




const HeaderCard = () => {
    return (
        <ContainerHeader>
            <p>icone</p>
            <img src="./Images/logo.png" />
            <p>icone</p>
        </ContainerHeader>
    )
}

export default HeaderCard
