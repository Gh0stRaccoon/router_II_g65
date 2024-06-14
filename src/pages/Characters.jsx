import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const fetchCharacters = async () => {
        const result = await fetch("https://www.swapi.tech/api/people")
        const { results } = await result.json()
        setCharacters(() => results)
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    return (
        <div>
            <h1>Personajes</h1>
            <div style={{display: "grid"}}>
                {characters.map((character) => {
                    return (
                        <Link to={`/personaje/${character.uid}`} key={`character-${character.uid}`}>{character.name}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Characters;