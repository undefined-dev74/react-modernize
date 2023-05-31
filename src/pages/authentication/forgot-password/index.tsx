import type { ReactElement } from "react";
import { Grid, Box, Card, Typography, Stack } from "@mui/material";
import Link from "next/link";
import AuthRegister from "../auth/AuthRegister";
import Logo from "@/layouts/full/shared/logo/Logo";
import BlankLayout from "@/layouts/blank/BlankLayout";
import PageContainer from "@/components/container/PageContainer";
import AuthForgot from "../auth/AuthForgot";

const Forgot = () => (
  <PageContainer title="Forgot Password" description="this is Forgot password">
    <Box
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: "0.3",
        },
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation={9}
            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "600px" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo />
            </Box>
            <AuthForgot
              subtext={
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  color="textSecondary"
                  mb={1}
                >
                  Forgot Password
                </Typography>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
);

export default Forgot;

Forgot.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
