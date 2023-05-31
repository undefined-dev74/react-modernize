import { useSelector } from "react-redux";
// Mui imports
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { RootState } from "src/redux/reducers";

const CustomLoader = (props: any) => {
  const { loading } = useSelector((store: RootState) => store.loading);

  return (
    <Backdrop
      open={loading}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 900,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          }}
          size={50}
          thickness={5}
          {...props}
          value={100}
        />

        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={50}
          thickness={5}
          {...props}
        />
      </Box>
    </Backdrop>
  );
};

export default CustomLoader;
