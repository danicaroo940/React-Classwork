import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function AxiosPokemon () {
    const navigate = useNavigate();
    

    return (
        <div>
            <h1>Ejercicio Axios Pokemon React</h1>
            <Button children='Ir al ejercicio de Dogs' onClick={()=> navigate('/sofia')}/>
            <Button children='Volver' onClick={()=> navigate('/')} />
        </div>
    )
}