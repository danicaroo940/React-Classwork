import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "./Button"

useState

export function SearchDog (){
    const [breeds, setBreeds] = useState([])
    const [imgBreed, setImgBreed] = useState('')

    async function allBreeds () {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/list/all');
            const data = (response.data)
            setBreeds(data.message);
        }catch(err){
            console.log(err)
        } 
    }
    useEffect(() => {
        allBreeds();
    }, [])

    function handleSubmit (e) {
        e.preventDefault();
        const breed = e.target.breeds.value;
        async function searchBreed () {
            try {
                const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
                const data = (response.data)
                setImgBreed(data.message);
            }catch(err){
                console.log(err)
            } 
        }
        searchBreed ()
    }



    return (
        <div>
            <h1>Search by breeds</h1>
            <form onSubmit={handleSubmit}>
                <select name="breeds">
                    {Object.keys(breeds).map((breed, index) => {
                        return (
                            <option key={index} value={breed}>{breed}</option>
                        )}
                    )}
                </select>
                <input type="submit" value="Enviar" />
            </form>
            {imgBreed && <img src={imgBreed} alt="Dog-by-breed" />}
        </div>
    )
}