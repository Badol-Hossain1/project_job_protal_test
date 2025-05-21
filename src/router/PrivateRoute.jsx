import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span> // or your custom spinner
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
}

export default PrivateRoute
