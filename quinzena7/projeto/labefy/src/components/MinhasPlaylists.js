import React from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";

const ContainerPlaylists = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 600px;
  height: 600px;
  margin-top: 70px;
  color: #eee;
  background-image: url("/images/background5.jpg");
  letter-spacing: 2px;
  font-size: 24px;
    


`
const CardPlaylist = styled.div`
  margin: 5px;  
  border: 1px solid #69369e;
  border-radius: 50px;
  padding: 10px;
  width: 300px;
  align-self: center;
  background-color: #999999;
  color:#69369e;
  display: flex;
  justify-content: space-between;
  cursor: pointer ;
  
    
       
    & button {
      border-radius: 50px;
      border: 1px solid #69369e;
      color:red;
      padding: 20 10px;
    }

`
const Player = styled.div`

margin: 10px;  
border: 1px solid #69369e;
border-radius: 50px;
padding: 10px;
width: 350px;
align-self: center;
background-color: #999999;
color:#69369e;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  & div {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    align-self: center;
  }  
  & button {
      border-radius: 50px;
      border: 1px solid #69369e;
      color:red;
      width: 24px;
      height: 24px;
     
    }
  & audio{
    padding: 0 10px;
    align-self: center;
    width: 180px;
    height: 20px;
  }
`
const TituloPlaylist = styled.div`
  background-color: rgba(27,27,27, .8);
  width: 600px;
  height: 60px;
  border-top: 1px solid rgb(114,114,114);
  border-bottom: 1px solid rgb(114,114,114);
  font-size: 30px;
  text-transform: uppercase;
  padding-top: 15px;
  
  
`
const TelaComMusicas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px

`
const DivRenderLoading = styled.div`
  position: relative;
`


export default class MinhasPlaylists extends React.Component {
  state = {
    activePlaylistTracks: [],
    activePlaylist: null,
    isLoading: false,
  }

  resetState = () => {
    this.setState({
      activePlaylistTracks: [],
      activePlaylist: null
    })
  }

  handleDeleteClick = (ev, id) => {
    ev.stopPropagation()
    this.props.deletePlaylist(id)
  }


  getPLaylistsTrack = (playlist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "joao-ferrao-johnson"
      }
    })

      .then((res) => {
        this.setState({ activePlaylistTracks: res.data.result.tracks, activePlaylist: playlist })
      })
      .catch((err) => {
        alert("Playlists não encontradas, tente novamente.")

      })
  }

  removeTrack = (trackid) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.activePlaylist.id}/tracks/${trackid}`

    this.setState({ isLoading: true })

    axios.delete(url, {
      headers: {
        Authorization: "joao-ferrao-johnson"
      }
    })
      .then((res) => {
        this.getPLaylistsTrack(this.state.activePlaylist)
        alert("Musica deletada")

      })
      .catch((err) => {
        alert("Não foi possível deletar.")

      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }


  render() {


    const userPlaylist = this.props.playlists.map((list) => {
      return (
        <CardPlaylist key={list.id} onClick={() => this.getPLaylistsTrack(list)}>
          {list.name}
          <button onClick={(e) => this.handleDeleteClick(e, list.id)}>X</button>
        </CardPlaylist>
      )
    })

    const renderSelectPlaylist = (

      <DivRenderLoading>
        {this.state.isLoading && <Loading />}
        <button onClick={this.resetState}>Voltar</button>
        <div>

          {this.state.activePlaylistTracks.length === 0 ? (
            <p>Essa Playlist está vazia :/</p>
          ) : (
            <TelaComMusicas>
              <TituloPlaylist>
                {this.state.activePlaylist?.name}
              </TituloPlaylist>
              {this.state.activePlaylistTracks.map(track => (
                <Player key={track.id}>
                  <div>
                    {track.name} -- {track.artist}
                    <button onClick={() => this.removeTrack(track.id)}>X</button>
                  </div>
                  <audio controls>
                    <source src={track.url} />
                  </audio>
                </Player>
              ))}
            </TelaComMusicas>
          )}

        </div>
      </DivRenderLoading>
    )


    return (
      <>
        <ContainerPlaylists>
          {(this.state.activePlaylist === null) ? (
            <>
              <h3>Minhas Playlists</h3>
              {userPlaylist}
            </>
          ) : (renderSelectPlaylist)}

        </ContainerPlaylists>


      </>
    )
  }
}