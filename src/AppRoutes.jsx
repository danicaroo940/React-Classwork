import { useRoutes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register'
import { Frontpage } from './pages/Frontpage'
import { German } from './pages/German'
import { Sofia } from './pages/Sofia';


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
                element: <Sofia/>,
                path: '/sofia'
            }
        ]
    )
}