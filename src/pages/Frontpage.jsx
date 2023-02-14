import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import '../App.css'

export function Frontpage() {
    const navigate = useNavigate()
  
    return (
      <div className="App">
        <h1> Front page</h1>
        <Button 
        children='Login' 
        onClick={()=> navigate('/login')} 
        />
        <Button 
        children='Register' 
        onClick={()=> navigate('/register')} 
        />
        <Button 
        children='Ejercicio German' 
        onClick={()=> navigate('/German')} 
        />
         <Button 
        children='Ejercicios Axios Sofia ' 
        onClick={()=> navigate('/AxiosDogs')} 
        />
      </div>
    )
  }