import { FacebookAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Main = () => {
  const facebookProvider = new FacebookAuthProvider();
  const { providerLogin } = useContext(AuthContext);
  const handleFacebookLogin = () => {
    providerLogin(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <button type="button" onClick={handleFacebookLogin}>
        Facebook Login
      </button>
    </div>
  );
};

export default Main;
