import App from "./App";
import React from "react";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

