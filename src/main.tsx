import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

// styles
import "./index.css";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryProvider } from "./queries/provider";
// Checking Pre-list commit stagging
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactQueryProvider>
    </Provider>
  </React.StrictMode>
);
