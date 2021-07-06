import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        setUserData({
          email: user.email,
          token: tokenResult.token,
        });
        // this directly comes from firebase, so we don't have to worry about saving it to local storage
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ setUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
