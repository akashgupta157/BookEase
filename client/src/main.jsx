import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store.js";
import { Provider } from "react-redux";
import ScrollToTop from "./components/scrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
  </Provider>
);
