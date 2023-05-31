import Loadable from "@/components/shared/Loadable";
import MinimalLayout from "@/layouts/blank/BlankLayout";
import { lazy } from "react";

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/authentication/login")));
const AuthRegister = Loadable(
  lazy(() => import("../pages/authentication/register")),
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "authentication/login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;
