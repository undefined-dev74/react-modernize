import { lazy } from "react";

// project import

import ProtectedRoute from "./ProtectedRoute";
import FullLayout from "../layouts/full/FullLayout";
import Loadable from "@/components/shared/Loadable";
// import Orders from "@/pages/Orders";
// import PageNotFound from "src/pages/NotFound";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));
const PageNotFound = Loadable(lazy(() => import("../pages/NotFound")));
const Orders = Loadable(lazy(() => import("../pages/Orders")));

// render - sample page

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "",
  element: <ProtectedRoute />,
  children: [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        {
          path: "/",
          element: <DashboardDefault />,
        },
        {
          path: "dashboard",
          element: <DashboardDefault />,
        },
        {
          path: "manage/orders",
          element: <Orders />,
        },

        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ],
};

export default MainRoutes;
