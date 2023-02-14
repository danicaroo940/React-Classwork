import { Button } from "../components/Button"
import { Counter } from "../components/Counter"
import { Greeting } from "../components/Greeting"
import { useNavigate } from "react-router-dom";

export function German (){
    const navigate = useNavigate()
    return (
        <div>
            <h1>German</h1>
            <Counter initValue ={10} upClick ={3} downClick ={2}/>
            <Greeting value={'Hola Euralio'}/>
            <Button children='Volver' onClick={()=> navigate('/')} />
        </div>
    )
}