import React, { useState, useEffect }from "react";

const useCharacter = (url) => {
    const [character, setCharacter] = useState([])
    
    useEffect(()=>{
        async function fetchCharacter() {
            const response = await fetch(url)
            const character = await response.json()
            setCharacter(character.results)
        }

        fetchCharacter()
        // fetch('https://rickandmortyapi.com/api/character/')
        // .then(response => response.json())
        // .then(data => setCharacter(data.results))
    }, [url])
 
    return character;
}

export default useCharacter;