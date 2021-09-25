import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router';


const StyledNavLink = styled(NavLink)`
    margin: 0 16px;
    letter-spacing: 3px;
    cursor: pointer;
    text-decoration: none;
    color: rgb(0 31 62);
    font-weight: bold;


    &:hover {
        font-size: 18px;
        color: rgb(179,204,230);
        letter-spacing: 4px;
        font-weight: bold;
    }
`

const ContainerHeader = styled.div`
    background-color: rgb(55 148 241);
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    color: rgb(13,26,38);
    letter-spacing: 2px;
    width: 100%;
    border-bottom: 4px solid rgb(38,77,115);
    

    & ul {
        list-style: none;
        display: flex;
        align-items: center;
        
    }
    
    


`
const LogoName = styled.div`
    color: white;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & img {
        width: 90px;
        height: 60px;
    }

`
export default function Header({ userToken }) {
    
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const isUserLoggedIn = Boolean(userToken)



    return (
        <ContainerHeader>
            <LogoName onClick={goToHomePage}>
                <img src="./img/logosemfundo.png" alt="logo" />
                <h1>LABE-X</h1>
            </LogoName>
            <ul>
                <StyledNavLink to="/login">Login</StyledNavLink>
                <StyledNavLink to="/trips/list">Viagens</StyledNavLink>
                <StyledNavLink to="/trips/aplication">Candidatar-se</StyledNavLink>
                {isUserLoggedIn && (
                    <StyledNavLink to="/admin/home">Home</StyledNavLink>
                )}
            </ul>
        </ContainerHeader>
    )
}
