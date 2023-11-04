import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const AuthLayout = () => {
  const isAuthenticated = !!Cookies.get("accessToken");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
