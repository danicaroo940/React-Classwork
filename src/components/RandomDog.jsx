import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "./Button"

export const RandomDog = () => {
    const [randomDog, setRandomDog] = useState('')
    const [randomActive, setRandomActive] = useState(false)
    async function getRandomDog() {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random')
            const data = (response.data)
           setRandomDog(data.message)
        }catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getRandomDog()
    }, [])
    return (

    <> <Button children = 'Activate/Desactivate random dog' onClick = {() => setRandomActive(!randomActive)} />
        {randomDog && randomActive===true &&
        <>
        <h1>Random Dog</h1>
        <img src={randomDog} alt="random dog" />
        <br />
        <Button children='Get another dog' onClick={getRandomDog} />
        </>
        }
    </>
  )
}
