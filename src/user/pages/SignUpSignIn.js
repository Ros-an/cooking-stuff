import React, { useState } from "react";
import image1 from "../../asset/sign-image1.jpg";
import image2 from "../../asset/sign-image2.jpg";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

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
          <SignIn toggleForm={toggleForm} />
        </div>
        <div className="user signupBx">
          <SignUp toggleForm={toggleForm} />
          <div className="imgBx">
            <img src={image2} alt="img_" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpSignIn;
