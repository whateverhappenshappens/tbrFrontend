import "./Signup.css";

import { useState, useEffect } from "react";
import { UserAPI } from "../../apis/UserAPIs";

import { User, UserRole } from "../../types/User";
import { FormError } from "../../types/FormError";

function Signup() {
  const [userDetails, setUserDetails] = useState<User>({
    password: "",
    email: "",
    name: "",
    role: UserRole.USER,
  });
  const [formError, setFormError] = useState<FormError>({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
  };

  const handleInputChange = (event: any) => {
    const { name, value }: any = event.target;

    setUserDetails({ ...userDetails, [name]: value });

    if (name === "email") {
      if (!validateEmail(userDetails.email))
        setFormError({ ...formError, email: "Invalid Email Format!" });
      else setFormError({ ...formError, email: "" });
    }
    if (name === "password") {
      if (!validatePassword(userDetails.password))
        setFormError({
          ...formError,
          password:
            "Password must be 8 characters long with at least one special character, and one number!",
        });
      else setFormError({ ...formError, password: "" });
    }
  };

  const handle_signup = async () => {
    console.log(userDetails);

    if (formError.email.length === 0 && formError.password.length === 0) {
      await UserAPI.create(userDetails);
      setUserDetails({
        password: "",
        email: "",
        name: "",
        role: UserRole.USER,
      });
      setFormError({ email: "", password: "" });
    } else console.log("Cannot create your account!");
  };

  useEffect(() => {
    console.log(formError);
  }, [formError]);

  return (
    <div className="Main">
      <div className="main_box">
        <aside className="left">
          <h1>TechBairn</h1>
          <h2>
            Start Your <br />
            Journey with us
          </h2>
          <p className="para">
            Discover India's best EdTech platform for upskilling yourself with
            community-based learning.
          </p>
          <div className="cards">
            <p className="try">
              I have done multiple courses with TechBairn, and they have helped
              me land my first internship with Google. I recommend everyone to
              at least try their programs once.
            </p>
            <div className="card_info">
              <div className="image"></div>
              <p className="info">
                John Doe
                <br />
                VIT Vellore
              </p>
            </div>
          </div>
        </aside>
        <div className="right">
          <h1>Sign up</h1>
          <h4>
            Have an account? <a href="#">Log in</a>
          </h4>
          <label>Fullname</label>
          <br />
          <input
            className="lng"
            type="text"
            placeholder="John Doe"
            value={userDetails.name}
            onChange={(event) =>
              setUserDetails({ ...userDetails, name: event.target.value })
            }
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="lng"
            type="email"
            placeholder="JohnDoe@abc.com"
            name="email"
            value={userDetails.email}
            onChange={(event) => handleInputChange(event)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="lng"
            type="password"
            placeholder="Minimum 8 characters"
            name="password"
            value={userDetails.password}
            onChange={(event) => handleInputChange(event)}
          />
          <br />
          <button className="btn" onClick={() => handle_signup()}>
            Create an account
          </button>
          <input className="check" type="checkbox" />
          <label>
            I accept all <span className="extra">Terms & conditions</span>
          </label>
          <p className="cont">-----or continue with Google------</p>
          <div className="google">Google</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
