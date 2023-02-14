import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { RandomPokemon } from "../components/RandomPokemon";

export function AxiosPokemon () {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Ejercicio Axios Pokemon React</h1>
            <RandomPokemon />
            <Button children='Ir al ejercicio de Dogs' onClick={()=> navigate('/AxiosDogs')}/>
            <Button children='Volver' onClick={()=> navigate('/')} />
        </div>
    )
}