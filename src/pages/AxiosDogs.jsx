import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { RandomDog } from "../components/RandomDog";
import { Breeds } from "../components/Breeds";
import { SearchDog } from "../components/SearchDog";
export function Sofia () {
    const navigate = useNavigate();
   

    return (
        <div>
            <h1>Ejercicio Axios DOGS React</h1>
            <Breeds />
            <RandomDog />
            <SearchDog />
            <Button children='Ir al ejercicio de Pokemon' onClick={()=> navigate('/')}/>
            <Button children='Volver' onClick={()=> navigate('/')} />
        </div>
    )
}