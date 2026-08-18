import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("internGuardUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("internGuardUser", JSON.stringify(user));
        } else {
            localStorage.removeItem("internGuardUser");
        }
    }, [user]);

    const register = async (userData) => {
        setUser(userData);
    };

    const login = async ({ email, password }) => {
        const savedUser = localStorage.getItem("internGuardUser");

        if (!savedUser) {
            throw new Error("No account found. Please register first.");
        }

        const storedUser = JSON.parse(savedUser);

        if (
            storedUser.email !== email ||
            storedUser.password !== password
        ) {
            throw new Error("Invalid email or password.");
        }

        setUser(storedUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}