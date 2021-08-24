import React from "react";
import styled from "styled-components";
import axios from "axios";


const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    height: 400px;
    margin-top: 70px;
    color: #eee;
    text-align: center;
    background-image: url("/images/background2.jpg");
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
        border: 2px solid #989898;
        background-color: #69369e;
        color: #eee;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-weight: bold;
        width: 200px;
        align-self: center;
        padding: 10px;

    }
     & select {
        margin: 5px;  
        border: 1px solid #69369e;
        border-radius: 50px;
        padding: 15px;
        width: 300px;
        align-self: center;
     }

`
export default class AddMusica extends React.Component {

    state = {
        musica: "",
        banda: "",
        link: "",
        idplaylist: ""
    }

    handleMusica = (e) => {
        this.setState({ musica: e.target.value })

    }

    handleBanda = (e) => {
        this.setState({ banda: e.target.value })

    }

    handleLink = (e) => {
        this.setState({ link: e.target.value })

    }

    addMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idplaylist}/tracks`
        const body = {
            "name": this.state.musica,
            "artist": this.state.banda,
            "url": this.state.link
        }

        axios.post(url, body, {
            headers: {
                Authorization: "joao-ferrao-johnson"
            }
        })
        .then((res) => {
            console.log(res)
            alert("Musica adicionada com sucesso!")
            this.setState({
                musica: "",
                banda: "",
                link: ""
            })
        })
        .catch((err) => {
            console.log(err)
            alert("Ocorreu um erro!")

        })

    }

    render() {



        return (
            <div>
                <DivInputs>
                    <h3>Adicionar Musica</h3>
                    <input
                        placeholder="Musica"
                        value={this.state.musica}
                        onChange={this.handleMusica}
                    />
                    <input
                        placeholder="Artista / Banda"
                        value={this.state.banda}
                        onChange={this.handleBanda}
                    />
                    <input
                        placeholder="Link"
                        value={this.state.link}
                        onChange={this.handleLink} />

                    <select onChange={(e) => this.setState({idplaylist: e.target.value})}>
                        <option value="">Selecione uma playlist</option>
                        {this.props.playlists.map(playlist => (
                            <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
                        ))}
                    </select>
                    <button onClick={this.addMusica}>Adicionar Música</button>
                </DivInputs>
            </div>



        )
    }
}