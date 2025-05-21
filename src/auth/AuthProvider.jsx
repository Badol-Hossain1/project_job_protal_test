import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LoginOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        CreateUser,
        Login,
        user,
        LoginOut,
        loading
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('🚀 ~ unSubscribe ~ user:', user)
            setUser(user)
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
