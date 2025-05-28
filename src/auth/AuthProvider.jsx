import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'
import axios from 'axios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LoginOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        CreateUser,
        Login,
        user,
        LoginOut,
        loading,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('🚀 ~ state change  ~ user:', user?.email)
            setUser(user)

            if (user?.email) {
                const currentUser = { email: user?.email }
                axios
                    .post('http://localhost:5000/jwt', currentUser, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        setLoading(false)
                        console.log('login ', res.data)
                    })
            } else {
                axios
                    .post(
                        'http://localhost:5000/logout',
                        {},
                        {
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        setLoading(false)
                        console.log('logout', res.data)
                    })
            }

            return () => {
                unSubscribe()
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
