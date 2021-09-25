import React from 'react'
import styled from 'styled-components';

const CardCandidates = styled.div`
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
    
    & h5{
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


export default function Candidates() {
    return (
        <CardCandidates>
            <div>
                <h4>Candidatos</h4>
                <h5>Nome:</h5>
                <h5>Idade:</h5>
                <h5>Porque?:</h5>
                <h5>Profissão:</h5>
                <h5>País:</h5>
            </div>
            <div>
                <button>OK</button>
                <button>X</button>

            </div>
        </CardCandidates>
    )
}
