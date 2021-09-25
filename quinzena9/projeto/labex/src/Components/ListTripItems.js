import React from 'react'
import { getTrips } from '../Utils/Api'
import { useEffect, useState } from 'react';
import styled from 'styled-components';



const ContainerTripsCard = styled.div`
    display: grid;
    gap: 15px;
    grid-template-rows: repeat(3, 1fr);;
    grid-template-columns: repeat(2, 1fr);
    width: 800px;
    height: 80vh;
    place-items: center;
    

`

const CardTrips = styled.div`
    background-color: rgb(217,230,242);
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    color: rgb(38, 77 ,115);
    letter-spacing: 1.5px;
    align-items: center;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 2px rgba(102,153,204,.6);
    
    & h4{
        border-bottom: 1px solid #336699;
        width: 150px;
        text-align: center;
        padding: 5px 0;
        font-size: 18px;
        margin-bottom: 10px;
        
        
    }
    & p {
        padding: 7px 0 0 10px;
        text-align: center;

    }
    
`


export const ListTripsItems = () => {

    const [data, setData] = useState([])

    const getMytrips = () => {
        getTrips()
            .then((res) => {
                // console.log(res.data.trips)
                setData(res.data.trips)
                

            })
            .catch((err) => {
                console.log(err)


            })
    }
    useEffect(() => {
        getMytrips()

    },[])


    return (
        <ContainerTripsCard>


                {data.map((listtrips) => (
                    
                    <CardTrips>
                        <h4> Experiência:</h4>
                            <p> {listtrips.name}</p>
                        <h4> Descrição: </h4>
                            <p>{listtrips.description}</p>
                        {/* <h4> Planeta: </h4>
                            <p>{listtrips.planet}</p>
                        <h4> Duração em dias: </h4> 
                            <p> {listtrips.durationInDays}</p>
                        <h4> Dia do embarque: </h4> 
                            <p>{listtrips.date}</p> */}
                    </CardTrips>
                

                )
                )}

        </ContainerTripsCard>
    )
}
