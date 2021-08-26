
import React from 'react';
import ResetMatches from './Components/ResetMatches';
import styled from 'styled-components';
import CardApp from './Components/CardApp/CardApp';

const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`

export default function App() {
  return (
    <ContainerPrincipal>
      <CardApp />
      Ola mundo
      <ResetMatches />
    </ContainerPrincipal>
  );
}


