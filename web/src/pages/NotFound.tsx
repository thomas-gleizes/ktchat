import React from "react";
import { Navigate } from "react-router-dom";

const NotFound: Page = () => {
  return <Navigate to="/" />;
};

export default NotFound;
