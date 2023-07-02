import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store.js";
import { Provider } from "react-redux";
import ScrollToTop from "./components/scrollToTop.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="138751730529-9193jelnnk4u9pp65lv6b74dh1me4d7r.apps.googleusercontent.com">
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
