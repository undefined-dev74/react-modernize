import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <Box>
    <Outlet />
  </Box>
);

export default MinimalLayout;
