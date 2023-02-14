import { useRoutes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register'
import { Frontpage } from './pages/Frontpage'
import { German } from './pages/German'
import { AxiosDogs } from './pages/AxiosDogs';
import { AxiosPokemon } from './pages/AxiosPokemon';


//Aqui se importan las paginas


export function AppRoutes () {
    return useRoutes(
        [
            {
                element: <Frontpage/>,
                path: '/'
            },
            {
                element: <Login/>,
                path: '/login'
            },
            {
                element: <Register/>,
                path: '/register'
            },
            {
                element: <German/>,
                path: '/german'
            },
            {
                element: <AxiosDogs/>,
                path: '/AxiosDogs'
            },
            {
                element: <AxiosPokemon/>,
                path: '/AxiosPokemon'
            }


        ]
    )
}