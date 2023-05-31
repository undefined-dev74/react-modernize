import { Box, Typography, Button, Link } from "@mui/material";
import img1 from "../../../../public/images/products/empty-shopping-bag.gif";

export const Upgrade = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 3, bgcolor: `${"primary.light"}`, borderRadius: "8px" }}
    >
      <>
        <Box>
          <Typography variant="h6" mb={1}>
            Unlimited Access
          </Typography>
          <Button
            color="primary"
            target="_blank"
            disableElevation
            component={Link}
            href="https://adminmart.com/product/modernize-next-js-admin-dashboard"
            variant="contained"
            aria-label="logout"
            size="small"
          >
            Upgrade
          </Button>
        </Box>
        <Box mt="-35px">
          <img alt="Remy Sharp" src={img1} width={100} />
        </Box>
      </>
    </Box>
  );
};
