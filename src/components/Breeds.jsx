import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from './Button';

export function Breeds (){
    const [breeds, setBreeds] = useState([])
    const [seeBreeds, setSeeBreeds] = useState(false)
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
    }, [seeBreeds])
    return (
        <>  
            {seeBreeds===true && 
                <h1>Lista de razas</h1>
            }
            <Button children='Ver razas' onClick={()=> setSeeBreeds(!seeBreeds)} />

           {seeBreeds===true &&
            Object.keys(breeds).map((breed, index) => {
                return (
                    <div key={index}>
                        <li>{breed}</li>
                    </div>
                        )
                    }
                )
           }

            
        </>
    )
}