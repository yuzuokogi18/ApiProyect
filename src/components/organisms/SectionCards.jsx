import styled from "styled-components";
import Cards from "../molecules/Cards";
import { useState, useEffect } from "react";

const SectionStyled = styled.section`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
`;

const DivStyled = styled.div`
    background-color: #18191d;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1%;
`;

function SectionCards() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters?limit=10')
            .then(response => response.json())
            .then(data => setCharacters(data.items))
            .catch(error => console.log(error));
    }, []);

    return (
        <DivStyled>
            <SectionStyled>
                {
                    characters.map(character =>
                        <Cards
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            ki={character.ki}
                            maxKi={character.maxKi}
                            race={character.race}
                            gender={character.gender}
                            affiliation={character.affiliation}
                        />
                    )
                }
            </SectionStyled>
        </DivStyled>
    );
}

export default SectionCards;
