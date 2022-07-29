import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { store } from '../src/stores/index'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  
);
