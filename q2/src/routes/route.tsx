import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import { Dashboard, Login, ReservedBook } from "./lazyLoading";
import AuthLayout from "../layouts/auth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/reserved-books",
        element: <ReservedBook />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
