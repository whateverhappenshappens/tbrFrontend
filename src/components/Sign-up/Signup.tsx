import "./Signup.css";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { UserAPI } from "../../apis/UserAPIs";
import { User, UserRole } from "../../types/User";
import { FormError } from "../../types/FormError";
import ReviewBox, { ReviewProps } from "./ReviewBox1";

const review: ReviewProps = {
  content:
    "I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.",
  name: "Ankit Sinha",
  college: "KIIT University",
  id: "1",
  img: "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
};

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
    return password.length >= 8;
  };

  const handleInputChange = (event: any) => {
    const { name, value }: any = event.target;

    setUserDetails({ ...userDetails, [name]: value });

    if (name === "email") {
      if (!validateEmail(value))
        setFormError({ ...formError, email: "Invalid Email Format!" });
      else setFormError({ ...formError, email: "" });
    }
    if (name === "password") {
      if (!validatePassword(value))
        setFormError({
          ...formError,
          password: "Password must be 8 characters long!",
        });
      else setFormError({ ...formError, password: "" });
    }
  };

  const handle_signup = async () => {
    console.log(userDetails);

    if (!formError.email && !formError.password) {
      try {
        await UserAPI.create(userDetails);
        setUserDetails({
          password: "",
          email: "",
          name: "",
          role: UserRole.USER,
        });
        setFormError({ email: "", password: "" });
      } catch (error) {
        console.error("Signup failed:", error);
        alert("Signup failed: " + error.message); // Show alert with error message
      }
    } else {
      alert("Cannot create your account! Please correct the errors."); // Show alert if form validation fails
    }
  };

  useEffect(() => {
    console.log(formError);
  }, [formError]);

  return (
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
        <div >
          {/* <p className="try">
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
          </div> */}
          <ReviewBox {...review} />
        </div>
        
      </aside>
      <div className="right">
        <h1>Sign up</h1>
        <h3>
          Have an account? <a href="#">Log in</a>
        </h3>
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
          onChange={handleInputChange}
        />
        <br />
        {formError.email && <div className="error">{formError.email}</div>}
        <label>Password</label>
        <br />
        <input
          className="lng"
          type="password"
          placeholder="Minimum 8 characters"
          name="password"
          value={userDetails.password}
          onChange={handleInputChange}
        />
        <br />
        {formError.password && <div className="error">{formError.password}</div>}
        <input className="check" type="checkbox" />
        <span className="extra1">
          I accept all <span className="extra">Terms & conditions</span>
        </span>
        <br />
        <button className="btn" onClick={handle_signup}>
          Create an account
        </button>
        <p className="cont">-----or continue with Google------</p>
        <a href="#"><div className="google">
          <FaGoogle className="icon" />
          Google
        </div></a>
      </div>
    </div>
  );
}

export default Signup;
