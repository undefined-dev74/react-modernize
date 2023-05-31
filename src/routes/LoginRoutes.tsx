import Loadable from "@/components/shared/Loadable";
import MinimalLayout from "@/layouts/blank/BlankLayout";
import { lazy } from "react";

// project import
// import BlankLayout from "src/layouts/blank/BlankLayout";
// import AuthLogin from "src/pages/authentication/auth/AuthLogin";
// import AuthRegister from "src/pages/authentication/auth/AuthRegister";

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/authentication/login")));
const AuthRegister = Loadable(
  lazy(() => import("../pages/authentication/register"))
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
