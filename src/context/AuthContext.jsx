import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    setUser(userData);
  };

  const login = async ({ email, password }) => {
    if (!user) {
      throw new Error("No account found. Please register first.");
    }

    if (user.email !== email || user.password !== password) {
      throw new Error("Invalid email or password.");
    }

    setUser(user);
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