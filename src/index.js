import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider, ProductsProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </UserProvider>
);
