import React from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate, useLocation, Route } from "react-router-dom";

function PrivateRoute({ ...rest }) {
  const { userToken } = useAuthContext();
  let location = useLocation();
  return userToken ? (
    <Route {...rest} />
  ) : (
    <Navigate state={{ from: location.pathname }} replace to="/authenticate" />
  );
}

export default PrivateRoute;
