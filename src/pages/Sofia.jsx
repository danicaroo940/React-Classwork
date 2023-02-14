import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { RandomDog } from "../components/RandomDog";
import { Breeds } from "../components/Breeds";
export function Sofia () {
    const navigate = useNavigate();
   

    return (
        <div>
            <h1>Sofia</h1>
            <Breeds />
            <RandomDog />
            <Button children='Volver' onClick={()=> navigate('/')} />
        </div>
    )
}