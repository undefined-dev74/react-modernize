import { lazy } from "react";

// project import

import ProtectedRoute from "./ProtectedRoute";
import FullLayout from "../layouts/full/FullLayout";
import Loadable from "@/components/shared/Loadable";
// import PageNotFound from "src/pages/NotFound";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));
const PageNotFound = Loadable(lazy(() => import("../pages/NotFound")));

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
        // {
        //   path: 'sample-page',
        //   element: <SamplePage />,
        // },
        // {
        //   path: 'shadow',
        //   element: <Shadow />,
        // },
        // {
        //   path: 'typography',
        //   element: <Typography />,
        // },
        // {
        //   path: 'icons/ant',
        //   element: <AntIcons />,
        // },
        // {
        //   path: 'manage/list',
        //   element: <Lists />,
        // },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ],
};

export default MainRoutes;
