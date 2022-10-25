import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [profileState, setProfileState] = useState("");
  const [sentEmail, setSentEmail] = useState("");
  const { createUser, verifyEmail, updateUserProfile } =
    useContext(AuthContext);
  const [passwordErr, setPasswordErr] = useState();
  const [nameErr, setNameErr] = useState();
  const [photoUrlErr, setPhotoUrlErr] = useState();
  const [emailErr, setEmailErr] = useState();
  const [cpasswordErr, setCpasswordErr] = useState();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    if (!name) {
      setNameErr("Name field is required");
      return;
    } else {
      setNameErr("");
    }
    if (!photoUrl) {
      setPhotoUrlErr("PhotoUrl field is required");
      return;
    } else {
      setPhotoUrlErr("");
    }

    if (!email) {
      setEmailErr("Email field is required");
      return;
    } else {
      setEmailErr("");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErr("You have entered an invalid email address!");
    } else {
      setEmailErr("");
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      setPasswordErr("Password must have at least one Lowercase Character.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^\S*$/.test(password)) {
      setPasswordErr("Password must not contain Whitespaces.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setPasswordErr("Password must have at least one Uppercase Character.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^(?=.*[0-9]).*$/.test(password)) {
      setPasswordErr("Password must contain at least one Digit.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^(?=.*[0-9]).*$/.test(password)) {
      setPasswordErr("Password must contain at least one Digit.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/(?=.*[!#$%&? "])/.test(password)) {
      setPasswordErr("Password must contain at least one Special Symbol.");
      return;
    } else {
      setPasswordErr("");
    }

    if (password.length < 8) {
      setPasswordErr("Password must be at least 8 characters");
      return;
    } else {
      setPasswordErr("");
    }
    if (!(cpassword === password)) {
      setCpasswordErr("Confirm password must be equal to password");
      return;
    } else {
      setNameErr("");
      setEmailErr("");
      setPasswordErr("");
      setCpasswordErr("");
      setError("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          form.reset();
          setError("User created successfully");
          updateUserProfile(name, photoUrl);
          verifyEmail();
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Your photo url"
                required
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter password"
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                name="cPassword"
                placeholder="Confirm password"
                required
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>

              <label className="label">
                <span className="label-text-alt">
                  Already have an account?{" "}
                  <Link
                    className="font-bold text-base text-primary link link-hover"
                    to="/login"
                  >
                    Log In
                  </Link>
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
