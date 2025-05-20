import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
              {
                path: '/signup',
                element: <SignUp />,
            },
        ],
    },
])

export default router
