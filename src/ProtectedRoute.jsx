import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/authantication/signin" replace />;
  }

  try {
    jwtDecode(token);
  } catch {
    localStorage.removeItem("token");
    return <Navigate to="/authantication/signin" replace />;
  }

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedRoute;
