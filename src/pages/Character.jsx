import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)

    const fetchCharacter = async () => {
        const result = await fetch(`https://www.swapi.tech/api/people/${id}`)
        const { result: characterInfo } = await result.json()
        setCharacter(() => characterInfo)
    }

    useEffect(() => {
        fetchCharacter()
    }, [])

    return (
        <div>
            <h1>{character?.properties.name}</h1>
            <p>Altura: {character?.properties.height}</p>
            <p>Peso: {character?.properties.mass}</p>
        </div>
    )
}

export default Character;