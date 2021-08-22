import React from "react";
import styled from "styled-components";


const ContainerInicial = styled.div`
    background-image: url("/images/background3.jpg");
    background-size: cover;
    background-position: center;
    width: 600px;
    height: 500px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 30px;
    font-size: 20px;

    & div{
        background-color: rgba(27,27,27, .8);
        width: 600px;
        height: 120px;
        border-top: 1px solid rgb(114,114,114);
        border-bottom: 1px solid rgb(114,114,114);
        
    }

    & h2 {
        padding:0 10px;
    }

`

export default class PaginaInicial extends React.Component{
    render(){
        return(
            <ContainerInicial>
                <div>
                    <h2>BEM VINDO A LABEFY!</h2>
                    <p>Uma Nova Maneira de Ouvir Suas Músicas!!</p>
                </div>
                
            </ContainerInicial>
        )
    }
}