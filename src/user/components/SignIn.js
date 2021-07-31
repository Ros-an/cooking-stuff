import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { getUserInfo } from "../../utils/index";
// import { useAuthContext } from "../../context/authContext";
// const { setUserData, setLoader } = useAuthContext();

function SignIn({ toggleForm }) {
  let navigate = useNavigate();
  let { state } = useLocation();
  const [passwordVisibililty, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputField, setInputField] = useState({
    password: "",
    email: "",
  });
  const { password, email } = inputField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate(state?.from ? state.from : `/`);
      toast.info(`🤠Successfully Signed In.`, { position: "bottom-right" });
      } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong Password");
      } else {
        alert(errorMessage);
      }
      setLoading(false);
    }
  };
  const loginAsGuest = () =>{
    setInputField({
      email: "roshan@gmail.com",
      password: "@roshan12",
    })
  }
  return (
    <div className="formBx">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
        <div className="password-section">
          <input
            type={`${passwordVisibililty ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <span
            className="password-visibility"
            onClick={() => setPasswordVisibility(!passwordVisibililty)}
          >
            {passwordVisibililty ? (
              <i className="fas fa-eye-slash icon"></i>
            ) : (
              <i className="fas fa-eye icon"></i>
            )}
          </span>
        </div>
        <button type="submit">{loading ? "Signing..." : "Sign In"}</button>
        <button className="login-as-guest" onClick={loginAsGuest}>Sign In as Guest</button>
        <p className="signup">
          Don't have an account ?
          <Link to="#" onClick={() => toggleForm()}>
            Sign Up.
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
