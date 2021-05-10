import React, { useState } from "react";
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
            <img
              src="https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
              alt=""
            />
          </div>
          <div className="formBx">
            <form action="" onsubmit="return false;">
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <a href="#" onClick={() => toggleForm()}>
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="" onsubmit="return false;">
              <h2>Create an account</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="email" name="" placeholder="Email Address" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <a href="#" onClick={() => toggleForm()}>
                  Sign in.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1591277382575-ce798b25def5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpSignIn;
