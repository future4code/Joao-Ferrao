import React from 'react'
import styled from 'styled-components';
import { ListTripsItems } from '../Components/ListTripItems';
import { useHistory } from 'react-router';

const ListPageContainer = styled.div`
 background-color: rgba(0,31,62);
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  
   & h1 {
    color: rgb(179,204,230);
    margin: 25px 0 ;
    border-bottom: 2px solid #336699;
    border-top: 2px solid #336699;
    padding: 5px 12px
    
    
   }
   & button {
    color: rgb(38, 77 ,115);
        border: none;
        text-transform:uppercase;
        letter-spacing: 1.5px;
        font-size: 18px;
        background-color: rgb(217,230,242);
        cursor: pointer;
        margin: 25px 0;

        &:hover {
            
            color: rgb(179,204,230);
            letter-spacing: 2px;
            background-color: rgba(25,51,77,.5);
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
        }

   }
`






export const ListTripsPage= () => {
    const history = useHistory()

    const goToCreateTripsPage = () => {
        history.push("/admin/trips/create")
    }
    const goToTripsDetails = () => {
        history.push(`/admin/trips/:id`)
    }


    
    return (
        <ListPageContainer>
           
            <h1>Pacotes disponíveis</h1>
            <button onClick={goToCreateTripsPage}>Criar Viagem</button>
            
           <ListTripsItems onClick={goToTripsDetails}/>
          
        </ListPageContainer>
    )
}
