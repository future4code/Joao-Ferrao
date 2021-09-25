import React from 'react'
import { Router } from "./Route/Router";
import "./App.css";
import Header from './Components/Header';
import styled from 'styled-components';

const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(25,51,77);
  width: 100%;

`


export default function App() {
  return (
    <Router>
      {(userToken) => <>
        <ContainerApp>
          <Header userToken={userToken} />
        </ContainerApp>
      </>}
    </Router>
  )
}
