import React from 'react'
import styled from 'styled-components'
import useForm from './Hooks/useForm'
import { useState, useEffect } from 'react'

const ContainerPageStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,31,62);
    width: 100%;
    padding-bottom: 60px;
`
const ContainerPageAplicationForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(102,153,204,.7);
    width: 500px;
    height: 80vh;
    justify-content: center;
    border-radius: 5px;
    align-self: center;
    margin-top: 50px;
    & h2 {
        letter-spacing: 3px;
        text-transform: uppercase;
        color: white;
        font-size: 30px;
    }

`
const ContainerAplicationForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    margin: 30px 0;
    align-self: center;
    background-color: rgba(217,230,242);
    padding: 30px;
    height: 70%;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 1px rgb(217,230,242);
    & label {
        text-transform:uppercase;
        letter-spacing: 1.5px;
        font-size: 16px;
        color: rgb(38, 77 ,115);
        text-align: center;
    }

    & input {
        border: none;
        border-bottom: 2px solid #336699;
        margin-bottom: 16px;
        padding: 4px;
        background-color: rgb(217,230,242);
        
        &:hover {
            background-color: rgba(102,153,204,.5);
            border-radius: 5px;
            
        }
    }

`
export const AplicationFormPage = () => {
    const [trips, setTrips] = useState([])

    const {form, onChange, cleanFields} = useForm({name:"", age:"", aplicationText:"", profession:"", country:""})
    const submit = (e) => {
        e.preventDefault()
        cleanFields()
        
    }

    const getTrips = () => {
        getTrips()
            .then((res) => {
                
                setTrips(res.data.trips)
                

            })
            .catch((err) => {
                console.log(err)


            })
    }

    useEffect(() => {
        
       getTrips()

    },[])

    return (
        <ContainerPageStyle>

            <ContainerPageAplicationForm>
                <h2>Cadastro</h2>

                <ContainerAplicationForm>
                    <label for="name">Nome:</label> <br />
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        type="text"
                    />
                    <label for="age">Idade</label> <br />
                    <input
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        required
                        type="text"
                    />
                    <label for="aplicationText">Porque temos que te escolher?</label> <br />
                    <input
                        name="aplicationText"
                        value={form.aplicationText}
                        onChange={onChange}
                        required
                        type="text"
                    />

                    <label for="profession">Profissão:</label> <br />
                    <input
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        required
                        type="text"
                    />
                    <label for="country">País</label> <br />
                    <input
                        name="country"
                        value={form.country}
                        onChange={onChange}
                        required
                        type="text"
                    />
                    <label for="trips">Escolha uma Viagem</label>
                    <select name="trips" required type="select">
                    {trips.map((trip) => {
                        return <option value={trip}>{trip.name}</option>
                    })}
                    </select>
                    
                    
                    <input type="submit" onClick={submit}/>
                </ContainerAplicationForm>
            </ContainerPageAplicationForm>
        </ContainerPageStyle>
    )
}
