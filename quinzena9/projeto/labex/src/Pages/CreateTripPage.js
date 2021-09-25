import React from 'react'
import useForm from './Hooks/useForm'
import styled from 'styled-components'

const ContainerPageMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,31,62);
    width: 100%;
    padding-bottom: 60px;
`
const ContainerCreateForm = styled.div`
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
const CreateForm = styled.form`
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

export const CreateTripPage = () => {

    const {form, onChange, cleanFields} = useForm({name:"", planet:"", date:"", description:"", durationInDays:""})
    const submit = (e) => {
        e.preventDefault()
        cleanFields()
        
    }
    // const {name, planet, date, description, durationInDays} = newTrip
    return (
        <ContainerPageMain>
            <ContainerCreateForm>
            <h2>Criar Experiência</h2>

            <CreateForm>
                <label for="name">Nome:</label> <br />
                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    type="text"
                />
                <label for="planet">Planeta</label> <br />
                <input
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    required
                    type="text"
                />
                <label for="date">Data:</label> <br />
                <input
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required
                    type="text"
                />
                <label for="description">Descrição:</label> <br />
                <input
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    required
                    type="text"
                />
                <label for="durationInDays">Duração em dias</label> <br />
                <input
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    type="text"
                />
                <input type="submit" onClick={submit}/>
            </CreateForm>
            </ContainerCreateForm>

        </ContainerPageMain>
    )
}
