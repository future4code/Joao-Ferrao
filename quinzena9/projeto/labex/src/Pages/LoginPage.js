import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { postLogin } from '../Utils/Api';



const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(102,153,204,.7);
    width: 400px;
    height: 60vh;
    justify-content: center;
    border-radius: 5px;
    align-self: center;
    margin-top: 50px;

    & h2 {
        letter-spacing: 3px;
        text-transform: uppercase;
        color: rgb(179,204,230);
        font-size: 30px;
    }
     & img{
         width: 250px;
         
     }

`
const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    margin: 30px 0;
    align-self: center;
    background-color: rgba(217,230,242);
    padding: 30px;
    height: 50%;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 1px rgb(217,230,242);

    & label {
        text-transform:uppercase;
        letter-spacing: 1.5px;
        font-size: 16px;
        color: rgb(38, 77 ,115)
    }

    & input {
        border: none;
        border-bottom: 2px solid #336699;
        margin-bottom: 16px;
        padding: 8px;
        background-color: rgb(217,230,242);
        
        &:hover {
            background-color: rgba(102,153,204,.5);
            border-radius: 5px;
            
        }
        
        
    }
    & button {
        color: rgb(38, 77 ,115);
        border: none;
        text-transform:uppercase;
        letter-spacing: 1.5px;
        font-size: 12px;
        background-color: rgb(217,230,242);
        cursor: pointer;

        &:hover {
            font-size: 16px;
            color: rgb(179,204,230);
            letter-spacing: 2px;
            background-color: rgba(25,51,77,.5);
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
        }



    
    }
`
const ContainerBoxLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,31,62);
    width: 100%;
    padding-bottom: 60px;
`

export const LoginPage = ({setUserToken}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handlePassword = (e) => {
        setPassword(e.target.value)
        
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        
    }

    const login = async () => {
        const res = await postLogin(email, password)
        setUserToken(res.data.token)
        setEmail("")
        setPassword("")

        
    }
    

    return (
        <ContainerBoxLogin>

            <ContainerLogin>
                <img src="./img/login.png" alt="Login" />
                <h2>Login</h2>
                <ContainerForm>
                    <label for="email">Email:</label> <br />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}                        
                    /><br />
                    <label for="password">Senha:</label> <br />
                    <input
                        type="password"                        
                        name="password"
                        value={password}
                        onChange={handlePassword} />
                    <button onClick={login}>Login</button>
                </ContainerForm>
            </ContainerLogin>
        </ContainerBoxLogin>
                        )
}
