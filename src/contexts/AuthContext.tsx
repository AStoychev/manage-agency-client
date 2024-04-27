import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);;

interface AuthContextType {
    haveUser: boolean;
    login: Function;
    logout: () => void;
    children: React.ReactNode
}

export const AuthProvider: React.FC <AuthContextType> = ({ children }) => {
    const [haveUser, setHaveUser] = useState<boolean>(false);

    const login = (name: string) => {
        localStorage.setItem('auth', name),
            setHaveUser(true)
    }

    const logout = () => {
        localStorage.removeItem('auth'),
            setHaveUser(false)
    }

    return (
        <AuthContext.Provider value={{ haveUser, login, logout, children }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);