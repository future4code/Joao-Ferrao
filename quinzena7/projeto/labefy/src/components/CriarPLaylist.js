import React from "react";
import styled from "styled-components";
import axios from 'axios'

const DivPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 600px;
    height: 400px;
    margin-top: 70px;
    color: #eee;
    text-align: center;
    background-image: url("/images/background4.jpg");
    letter-spacing: 2px;
    font-size: 24px;   
   
    & input {
        margin: 5px;
        border: 1px solid #69369e;
        border-radius: 50px;
        padding: 15px;
        width: 300px;
        align-self: center;
    }
    & button {
        margin:15px 100px;
        border-radius: 50px;
        border: 1px solid #989898;
        background-color: #69369e;
        color: #eee;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-weight: bold;
        width: 200px;
        align-self: center;
    }
`

export default class CriarPlaylist extends React.Component {

    state = {
        inputPlaylist: ""
    }

    handlePlaylist = (e) => {
        this.setState({ inputPlaylist: e.target.value })

    }
    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputPlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "joao-ferrao-johnson"
            }
        })
            .then((res) => {
                alert(`Playlist ${this.state.inputPlaylist} criada com sucesso!`)
                this.setState({ inputPlaylist: "" })
            })
            .catch((err) => {
                alert("ERRO!! Já existe uma Playlist com esse nome. Escolha um nome diferente!")
            })
    }

    render() {



        return (
            <DivPlaylist>
                <h3>Criar Playlist</h3>
                <input
                    placeholder={"Nome da Playlist"}
                    value={this.state.inputPlaylist}
                    onChange={this.handlePlaylist}
                />
                <button onClick={this.createPlaylist}>Criar</button>
            </DivPlaylist>



        )
    }
}