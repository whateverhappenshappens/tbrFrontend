import React, { createContext, useContext, useState, useEffect } from "react";
import { UserAPI } from "../../apis/UserAPIs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const token = localStorage.getItem("access-token");
    if (token) {
      UserAPI.check_access_token_validity()
        .then((res) => {
          setIsLoggedIn(true);
          setUser(res.data.user);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
        });
    }
  }, []);

  const login = async (user) => {
    try {
      await UserAPI.login(user, null, setIsLoggedIn);
      setUser(user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    try {
      await UserAPI.logout();
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
