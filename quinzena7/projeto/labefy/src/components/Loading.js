import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

`

export class Loading extends Component {
    render() {
        return (
            <Container>
                <img src="./images/loading.gif" />                
            </Container>
        )
    }
}

export default Loading
