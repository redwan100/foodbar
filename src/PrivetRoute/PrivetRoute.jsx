import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";


const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <LoadingSpinner />
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
};

export default PrivetRoute;
