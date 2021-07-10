import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
function SignUp({ toggleForm }) {
  const [passwordVisibililty1, setPasswordVisibility1] = useState(false);
  const [passwordVisibililty2, setPasswordVisibility2] = useState(false);
  const [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  let { state } = useLocation();
  const [inputField, setInputField] = useState({
    createPassword: "",
    password: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, createPassword } = inputField;
    if (password !== createPassword) {
      return alert("🚫 Password do not match");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        toast.success(`😎 ${email} account created, Successfully!`);
        navigate(state?.from ? state.from : `/`);
        // ...
      })
      .catch((error) => {
        setLoader(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        setLoader(false);
      });
  };
  return (
    <div className="formBx">
      <form onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={inputField.email}
          onChange={handleChange}
        />
        <div className="password-section">
          <input
            type={`${passwordVisibililty1 ? "text" : "password"}`}
            name="createPassword"
            placeholder="Create Password"
            value={inputField.createPassword}
            onChange={handleChange}
          />
          <span
            className="password-visibility"
            onClick={() => setPasswordVisibility1(!passwordVisibililty1)}
          >
            {passwordVisibililty1 ? (
              <i className="fas fa-eye-slash icon"></i>
            ) : (
              <i className="fas fa-eye icon"></i>
            )}
          </span>
        </div>
        <div className="password-section">
          <input
            type={`${passwordVisibililty2 ? "text" : "password"}`}
            name="password"
            placeholder="Confirm Password"
            value={inputField.password}
            onChange={handleChange}
          />
          <span
            className="password-visibility"
            onClick={() => setPasswordVisibility2(!passwordVisibililty2)}
          >
            {passwordVisibililty2 ? (
              <i className="fas fa-eye-slash icon"></i>
            ) : (
              <i className="fas fa-eye icon"></i>
            )}
          </span>
        </div>
        <button type="submit" onClick={() => setLoader(true)}>
          {loader ? "creating..." : "Sign Up"}
        </button>
        <p className="signup">
          Already have an account ?
          <Link to="#" onClick={() => toggleForm()}>
            Sign in.
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
