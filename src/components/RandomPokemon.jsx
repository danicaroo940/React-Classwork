import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "./Button"
export function RandomPokemon () {
    const [pokemonRandomImg, setPokemonRandomImg] = useState('')
    const [pokemonRandomName, setPokemonRandomName] = useState('')
    const [activeRandom, setActiveRandom] = useState(false)
    async function getRandomPokemon(){
        try {
            const numMaxPokemon = 1008
            const numMinPokemon = 1
            const random = Math.floor(Math.random() * (Math.floor(numMaxPokemon)-Math.ceil(numMinPokemon)+1))
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            const data = (response.data)
            setPokemonRandomImg(data.sprites.front_default)
            setPokemonRandomName((data.name).toUpperCase())
        }catch (err) {
        console.log(err)
    }
}
    useEffect(() => {
        setActiveRandom(true)
    }, [pokemonRandomImg])
    
    return (
        <div>
            <h2>Random Pokemon</h2>
            <Button children = 'Random pokemon' onClick ={()=>{getRandomPokemon()}} />
            <Button children = 'Random pokemon enabled/disabled' onClick ={() => {setActiveRandom(!activeRandom)}}/>
            {activeRandom === true && pokemonRandomImg &&
            <>
            <img src={pokemonRandomImg} alt="Pokemon" />
            <h3>Name: {pokemonRandomName}</h3>
            </>
            }

        </div>
    )

}
