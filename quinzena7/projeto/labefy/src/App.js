import React from "react";
import CriarPlaylist from './components/CriarPLaylist';
import AddMusica from './components/AddMusica';
import MinhasPlaylists from './components/MinhasPlaylists';
import styled from "styled-components";
import axios from "axios";
import PaginaInicial from './components/PaginaInicial';




const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7951a8;
  height: 60px;
  width: 100%;



  & ul {
    align-self: center;
    display: flex;
    /* justify-content: space-between; */
    list-style: none;
    margin: 10px ;
    


    & li {
      margin: 0 10px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-size: 12px;
      color: #232323;
      cursor: pointer;
    }
    
    & li:hover{
      color: violet;
    }
  }


  & img {
    width: 47px;
    height: 47px;
    padding-left: 40px;
    align-self: center;
  }

  & div {
    display: flex;
    width: 200px;
    justify-content: space-evenly;
    font-size: 24px;
    color:#232323;
    letter-spacing: 2px;
    cursor: pointer;
  }

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  height: 800px;
  width: 100%;
  color: #989898

`

const StyledFooter = styled.footer`
  color: white;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  text-transform: italic;
`

export default class App extends React.Component {

  state = {
    pagina: "paginainicial",
    playlists: []
  }

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case "criarPlaylist":
        return <CriarPlaylist />
      case "paginainicial":
        return <PaginaInicial />
      case "adicionarMusica":
        return <AddMusica playlists={this.state.playlists} />
      case "minhasPlaylists":
        return <MinhasPlaylists playlists={this.state.playlists} deletePlaylist={this.deletePlaylist} />
      default:
        return "paginainicial"
    }

  }

  irParaAddMusica = () => {
    this.setState({ pagina: "adicionarMusica" })
  }
  irParaCriarPlaylist = () => {
    this.setState({ pagina: "criarPlaylist" })
  }
  irParaMinhasPlaylists = () => {
    this.setState({ pagina: "minhasPlaylists" })
  }
  irParaPaginaInicial = () => {
    this.setState({ pagina: "paginainicial" })
  }
  
  


  componentDidMount() {
    this.getPlaylist()
  }

  getPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "joao-ferrao-johnson"
      }
    })

      .then((res) => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch((err) => {
        alert("Playlists não encontradas, tente novamente.")

      })
  }

  deletePlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
    axios.delete(url, {
      headers: {
        Authorization: "joao-ferrao-johnson"
      }
    })
      .then((res) => {
        alert("Playlist deletada")
        this.getPlaylist()
      })
      .catch((err) => {
        alert("Não foi possível deletar.")

      })
  }
  


  render() {


    return (
      <Container>
        <HeaderStyle>
        <div onClick={this.irParaPaginaInicial}>
          <img src="/images/logo.png" alt="logo"  />
          <h4> Labefy</h4>
        </div>
          <ul>
            <li onClick={this.irParaCriarPlaylist}>Criar Playlist</li>
            <li onClick={this.irParaMinhasPlaylists}>Minhas Playlists</li>
            <li onClick={this.irParaAddMusica}>Adicionar Música</li>
          </ul>
        </HeaderStyle>
        <div>
        {this.renderizaPagina()}
        
        </div>
        <StyledFooter>
        <p>Labefy &reg; todos direitos reservados </p>
        </StyledFooter>
      </Container>



    )
  }
}

