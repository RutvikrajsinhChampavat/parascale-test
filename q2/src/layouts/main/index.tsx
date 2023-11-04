import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./header";
import Navbar from "./navbar";
// import Navbar from "./components/navbar";
// import Header from "./components/header";

const MainLayout = () => {
  const isAuthenticated = !!Cookies.get("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="grid grid-cols-8 grid-rows-[auto,1fr,auto]">
      <div className="hidden sm:block">
        <Navbar />
      </div>

      <main className="col-span-8 flex min-h-screen w-full flex-col justify-between space-y-3 sm:col-span-7">
        <div>
          <Header />
          <div className="p-7">
            <Outlet />
          </div>
        </div>
      </main>
    </main>
  );
};

export default MainLayout;
