import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "../components/Input"
import { Button } from "../components/Button"
export function Login (){
    const URL_API = 'https://jonathebridge-eshop-api.onrender.com'
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [buttonLogin, setButtonLogin] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (username === '' || password === '') 
        {
            return;
        }
        async function login(){  
            try{ 
                const response = await fetch(`${URL_API}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
                const data = await response.json();
                if (!data.token){
                    return;
                }
                setToken(data.token);
                setIsLogin(true);
            }catch(err)
                {
                    console.log(err)
                }
            }
        login();

    }, [buttonLogin])

    useEffect(() => {
        if (isLogin === false){
            return;
        }
        localStorage.setItem('token', token);
        async function getUsers (){
            try{
                const response = await fetch(`${URL_API}/users`, {
                    method: 'GET', 
                    headers: {
                        'Authorization': `${token}`
                    }
                })
                const data = await response.json();
                console.log(data)
                setUsers(data);
                

            }catch(err){
                console.log(err)
            }

        }
        getUsers();
    }
    ,[isLogin])

    function onChangeLoginHandler(e){
        const {name, value} = e.target;
        if (name === 'username'){
            setUsername(value);
        } else if (name === 'password'){
            setPassword(value);
        }
    }

    return (
        <>
        <h1>LOGIN MEMBERS</h1>
        <Input 
        name ='username' 
        placeholder='Username'
        type='text' 
        className='input-login'
        onChange ={onChangeLoginHandler}
        />
        <br></br>
        <Input 
        name ='password' 
        type='password' 
        placeholder='Password'
        className='input-login'
        onChange ={onChangeLoginHandler}
        />
        <Button 
        children = 'Login'
        onClick={()=>{setButtonLogin(!buttonLogin)}}
        />
    
        {isLogin && 
        
            <>
            <h2>Users Info:</h2>
                {
                users.map((e, key) => {
                    key = e._id;
                    return (
                        <div key = {key}>
                            <p>username: {e.username}</p>
                            <p>email: {e.email}</p>
                            <p>last conection time: {e.lastConnection}</p>
                        </div>
                        )
                })            
                }
            </>
        }
        <br></br>
        <br></br>
        <br></br>
        <Button 
        children = 'Home' 
        onClick ={ () => navigate('/') } 
        />

        <Button 
        children = 'Click to go Register Page' 
        onClick ={ () => navigate('/register') } 
        />
        
        </>
    )
}
