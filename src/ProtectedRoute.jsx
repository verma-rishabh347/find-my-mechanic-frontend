

import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/authantication/signin" replace />;
  }

  return <> <Outlet />  <Footer/></>;
};

export default ProtectedRoute;