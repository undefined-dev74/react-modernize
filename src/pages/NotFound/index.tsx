import {
  Box,
  Paper,
  styled,
  Card,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundImage: "none",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.grey[700],
  boxShadow: theme.shadows[0],
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const PageNotFound = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            lg={6}
            sx={{
              flexGrow: 0,
              maxWidth: "50%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              sx={{ ...theme.typography.h1 }}
              display="block"
              gutterBottom
            >
              Something went wrong
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ ...theme.typography.caption }}
              display="block"
              gutterBottom
            >
              The page you are looking was moved, removed, renamed, or might
              never exist!
            </Typography>

            <Button
              disableElevation
              onClick={() => navigate(`${config.defaultPath}`)}
              fullWidth
              size="large"
              variant="contained"
              color="secondary"
              mt={1}
            >
              Home
            </Button>
          </Grid>

          <Grid item lg={6} xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="404_image"
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PageNotFound;
