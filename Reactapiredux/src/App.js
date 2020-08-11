import React from "react";
import "./styles.css";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Quotes/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>SPACEX</h1>
        {/* <Provider> */}
        <Routes />
        {/* </Provider> */}
      </div>
    </BrowserRouter>
  );
}
