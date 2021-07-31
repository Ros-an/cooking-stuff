import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { auth } from "../firebase/firebase";
import { getUserInfo } from "../utils/index";
import { useGlobal } from "./globalContext";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const { setError } = useGlobal();
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [loader, setLoader] = useState(true);

  const getUserData = useCallback(
    async (token) => {
      try {
        const res = await getUserInfo(token);
        setUserData({
          _id: res.data.user._id,
          email: res.data.user.email,
          wishlist: res.data.user.wishlist,
        });
        setUserToken({
          _id: res.data.user._id,
          token
        })
      } catch (err) {
        console.log(err.message);
        setError({ message: err.message });
      } finally {
        setLoader(false);
      }
    },
    [setError]
  );
  useEffect(() => {
    let isCancel = false;
    auth.onAuthStateChanged(async (user) => {
      if (!isCancel) {
        if (user) {
          const tokenResult = await user.getIdTokenResult();
          getUserData(tokenResult.token);
          // this directly comes from firebase, so we don't have to worry about saving it to local storage
        } else {
          setLoader(false);
        }
      }
    });
  }, [getUserData]);
  return (
    <AuthContext.Provider value={{ setUserData,userToken, userData, loader, setLoader }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
