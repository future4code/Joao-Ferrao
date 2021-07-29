import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import "./App.css"
import styled from "styled-components";

const ContainerCardPequeno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center ;
  border: 1px solid black;
  align-items: center;
  margin: 10px;

`;
 


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/81784264?v=4" 
          nome="João Rafael Ferrão" 
          descricao="Oi, eu sou o João Rafael Ferrão. Sou estudante do curso de Front-End da Labenu. Adoro lidar com tecnologia, piadas de duplo sentido e de conhecer pessoas novas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <ContainerCardPequeno>
          <CardPequeno
            imagem="https://cdn.icon-icons.com/icons2/2768/PNG/512/email_icon_176616.png"
            titulo="Email: "
            texto="testedalabenu@labenu.com.br"
          />
        </ContainerCardPequeno>
        <ContainerCardPequeno>
          <CardPequeno
            imagem="https://cdn.icon-icons.com/icons2/2460/PNG/512/location_pin_place_map_address_placeholder_icon_149101.png"
            titulo="Endereço: "
            texto="qualquer rua com nome interessante, 654. Brasil"
          />
        </ContainerCardPequeno>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.vippng.com/png/detail/340-3400215_outback-steakhouse-logo-png-transparent-outback-steakhouse-logo.png" 
          nome="Outback" 
          descricao="Gerente de salão e treinador, com 7 inaugurações na rede!!" 
        />
        
        <CardGrande 
          imagem="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/296bde74-0503-41fc-a6d8-0a5330187002/202012221758_Dgxd_i.png" 
          nome="Frango no Pote" 
          descricao="Especialista em Treinamento da rede" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
