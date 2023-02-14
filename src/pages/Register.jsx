import { useNavigate } from "react-router-dom"
export function Register (){
    const navigate = useNavigate()
    return (
        <>
        <h1>Register MEMBERS</h1>
        <button onClick={()=> navigate('/login')}>
            Click to go Login Page
        </button>
        </>
    )
}