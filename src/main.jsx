import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalProvider from "./context/CardContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
