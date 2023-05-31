import { CacheProvider } from "@emotion/react";
// MUI (formerly Material-UI) imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Custom imports
import createEmotionCache from "./createEmotionCache";

import CustomLoader from "./components/shared/CustomLoader";
import { baselightTheme } from "./theme/DefaultColors";
import ScrollTop from "./components/shared/ScrollTop";
import ThemeRoutes from "./routes";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  const theme = baselightTheme;
  // Client-side cache, shared for the whole session of the user in the browser.
  const clientSideEmotionCache = createEmotionCache();

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {/* <ScrollTop> */}
        <AuthProvider>
          <ScrollTop>
            <ThemeRoutes />
          </ScrollTop>
        </AuthProvider>
        {/* </ScrollTop> */}
        <CustomLoader />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
