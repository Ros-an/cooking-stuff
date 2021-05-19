import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../asset/sign-image1.jfif";
import image2 from "../asset/sign-image2.jfif";
import "./SignUpSignIn.css";

function SignUpSignIn() {
  const [addClass, setClass] = useState(true);
  function toggleForm() {
    setClass((prev) => !prev);
  }
  return (
    <section>
      <div className={addClass ? "container" : "container active"}>
        <div className="user signinBx">
          <div className="imgBx">
            <img src={image1} alt="img_" />
          </div>
          <div className="formBx">
            <form action="">
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <Link to="#" onClick={() => toggleForm()}>
                  Sign Up.
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="">
              <h2>Create an account</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="email" name="" placeholder="Email Address" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <Link to="#" onClick={() => toggleForm()}>
                  Sign in.
                </Link>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img src={image2} alt="img_" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpSignIn;
