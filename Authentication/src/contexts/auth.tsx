import React, { createContext, useState } from "react";
import * as auth from "../services/auth"

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<Object | null>(null)

    async function signIn(email: string, password: string) {
        const response = await auth.signIn(email, password);
        setUser(response.user)
    }

    function signOut(){
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext