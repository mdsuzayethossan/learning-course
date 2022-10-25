import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center">
        <button className="btn btn-lg bg-transparent text-primary border-none loading"></button>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
