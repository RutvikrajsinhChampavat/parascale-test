// Auth

import { lazy } from "react";

export const Login = lazy(() => import("../pages/auth/login"));

// Main

export const Dashboard = lazy(() => import("../pages/main/dashboard"));
export const ReservedBook = lazy(() => import("../pages/main/reserved-books"));
