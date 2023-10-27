import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./app/store.tsx";
import { Provider } from "react-redux";

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
