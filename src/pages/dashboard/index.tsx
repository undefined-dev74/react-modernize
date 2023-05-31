import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";

// components

import YearlyBreakup from "./YearlyBreakup";
import MonthlyEarnings from "./MonthlyEarnings";
import RecentTransactions from "./RecentTransactions";
import ProductPerformance from "./ProductPerformance";
import Blog from "@/pages/dashboard/Blog";
import PageContainer from "@/components/container/PageContainer";
import SalesOverview from "./SalesOverview";

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
