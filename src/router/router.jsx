import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import JobDetails from '../pages/JobDetails/JobDetails'
import PrivateRoute from './PrivateRoute'
import JobApply from '../pages/JobApply/JobApply'
import MyApplication from '../pages/MyApplication/MyApplication'
import AddJob from '../pages/AddJob/AddJob'

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
                path: '/jobs/:id',
                element: (
                    <PrivateRoute>
                        {' '}
                        <JobDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/jobs/${params.id}`),
            },

            {
                path: '/MyApplications',
                element: (
                    <PrivateRoute>
                        <MyApplication />
                    </PrivateRoute>
                ),
            },

            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/JobApply/:id',
                element: (
                    <PrivateRoute>
                        <JobApply />
                    </PrivateRoute>
                ),
            },
            {
                path: '/addJob',
                element: (
                    <PrivateRoute>
                        <AddJob />
                    </PrivateRoute>
                ),
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ],
    },
])

export default router
