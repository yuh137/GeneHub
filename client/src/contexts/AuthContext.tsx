import React, { createContext, useContext, useState } from 'react'
import { isTokenExpired, User } from '../utils/utils';

interface AuthContextType {
    isAuthenticated: boolean;
    logout: () => void;
    checkSession: () => Promise<boolean>;
    loggedInUser: User | null;
    defineLoggedInUser: (user: User) => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export interface AuthToken {
    jwtToken: string;
    userID: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = (props: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

    function logout() {
        setIsAuthenticated(false);
        setLoggedInUser(null);
        localStorage.removeItem('token');
    }

    function defineLoggedInUser(user: User) {
        setLoggedInUser(user);
    }

    async function checkSession() {
        const tokenString = localStorage.getItem("token");

        console.log("check session: ", tokenString);
        if (tokenString && tokenString !== "") {
            setIsAuthenticated(true);
            const token: AuthToken = JSON.parse(tokenString);

            const jwt = token.jwtToken;
            if (isTokenExpired(jwt)) {
                return false;
            }
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            logout,
            checkSession,
            loggedInUser,
            defineLoggedInUser,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return context;
  };