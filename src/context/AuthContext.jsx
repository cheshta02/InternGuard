import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("internGuardUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const register = async (userData) => {
        const users = JSON.parse(localStorage.getItem("internGuardUsers") || "[]");
        const existingUser = users.find((item) => item.email === userData.email);
        if (existingUser) { throw new Error("An account with this email already exists."); }
        const newUser = {...userData};
        users.push(newUser);
        localStorage.setItem(
            "internGuardUsers",
            JSON.stringify(users)
        );
        localStorage.setItem(
            "internGuardUser",
            JSON.stringify(newUser)
        );
        setUser(newUser);
    };

    const login = async ({ email, password }) => {
        const users = JSON.parse(localStorage.getItem("internGuardUsers") || "[]" );
        const foundUser = users.find((item) =>  item.email === email &&  item.password === password );
        if (!foundUser) {throw new Error("Invalid email or password.") }
        localStorage.setItem("internGuardUser", JSON.stringify(foundUser));
        setUser(foundUser);
    };

    const resetPassword = async ({
        email,
        question,
        answer,
        newPassword,
    }) => {
        const users = JSON.parse(localStorage.getItem("internGuardUsers") || "[]");
        const userIndex = users.findIndex((item) => item.email === email);
        if (userIndex === -1) { throw new Error("No account found with this email.");}
        const existingUser = users[userIndex];
        const securityQuestion = existingUser.securityQuestions?.find((item) => item.question === question);
        if (!securityQuestion) {throw new Error("Security question could not be verified.");}
        const correctAnswer = securityQuestion.answer.trim().toLowerCase();
        const enteredAnswer = answer.trim().toLowerCase();
        if (correctAnswer !== enteredAnswer) {throw new Error("Incorrect answer. Please try again.");}
        users[userIndex] = { ...existingUser, password: newPassword};
        localStorage.setItem("internGuardUsers", JSON.stringify(users));

        return true;
    };

    const logout = () => {
        localStorage.removeItem("internGuardUser");
        setUser(null);
    };

    const updateProfilePicture = (profilePicture) => {
        setUser((previousUser) => {
            const updatedUser = {...previousUser, profilePicture,};
            localStorage.setItem("internGuardUser", JSON.stringify(updatedUser));
            return updatedUser;
        });
    };

    return (
        <AuthContext.Provider  value={{ user, register, login, resetPassword, logout, updateProfilePicture}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}