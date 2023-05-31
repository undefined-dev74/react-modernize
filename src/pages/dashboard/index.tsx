import { ReactElement, lazy } from "react";
import { Grid, Box } from "@mui/material";

// components
const SalesOverview = lazy(() => import("./SalesOverview"));
const YearlyBreakup = lazy(() => import("./YearlyBreakup"));
const MonthlyEarnings = lazy(() => import("./MonthlyEarnings"));
const RecentTransactions = lazy(() => import("./RecentTransactions"));
const ProductPerformance = lazy(() => import("./ProductPerformance"));
const Blog = lazy(() => import("./Blog"));
import PageContainer from "@/components/container/PageContainer";
// import SalesOverview from "./SalesOverview";

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
