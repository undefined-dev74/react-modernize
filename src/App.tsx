import { CacheProvider } from "@emotion/react";

// Next.js imports

// MUI (formerly Material-UI) imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Custom imports
import createEmotionCache from "./createEmotionCache";

import { Provider } from "react-redux";

import { store } from "./redux/store";
import CustomLoader from "./components/shared/CustomLoader";
import { baselightTheme } from "./theme/DefaultColors";
import { ReactQueryProvider } from "./queries/provider";
import ScrollTop from "./components/shared/ScrollTop";
import ThemeRoutes from "./routes";
import AuthProvider from "./context/AuthProvider";
import ThemeCustomization from "./themes";

// Client-side cache, shared for the whole session of the user in the browser.

const App = () => {
  const theme = baselightTheme;
  const clientSideEmotionCache = createEmotionCache();

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {/* <ScrollTop> */}
        <AuthProvider>
          <ThemeRoutes />
        </AuthProvider>
        {/* </ScrollTop> */}
        <CustomLoader />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
