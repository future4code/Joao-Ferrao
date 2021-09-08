import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ResetMatches from '../../ResetMatches'

const StyledUl = styled.ul`
  padding: 10px 20px;
  margin: 0;
  list-style: none;
  width: 100%;
`
const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #d2d2d2;
  margin-top: 10px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #eee;
  box-shadow: 2px 3px 10px -2px rgba(0,0,0,0.5);
`
const MatchName = styled.span`
  padding-left: 30px;
  font-weight: 700;
  color: #555;
  font-size: 1.4em;
  flex-grow: 1;
`
const MatchPhoto = styled.div`
  height: 60px;
  width: 60px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }
`
const MatchAge = styled.span`
  color: #555;
  padding: 0 15px;
`
export default function MyMatches() {
  const [matches, setMatches] = useState([])

  const getMatches = () => {
    const user = "joao-ferrao-johnson"
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/matches`

    axios
      .get(url)
      .then((res) => {

        setMatches(res.data.matches)
      })
      .catch((err) => {
        alert("Ocorreu um erro")
      })
  }

  useEffect(() => {
    getMatches()
  }, [])

  return (
    <>
      <ResetMatches getMatches={getMatches} />
      <StyledUl>
        {matches.map(match => (
          <li>
            <StyledItem>
              <MatchPhoto>
                <img src={match.photo} />
              </MatchPhoto>
              <MatchName>{match.name}</MatchName>
              <MatchAge>{match.age}</MatchAge>
            </StyledItem>
          </li>
        ))}
      </StyledUl>
    </>

  )
}
