import React from "react";
import { Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "./Home";
import Payloads from "./Payloads";
// import QuoteList from "./QuoteList";

const Routes = () => {
  return (
    <Provider store={store}>
      <div>
      {/* <nav class="navbar navbar-dark"> */}
        {[
          {
            path: "/",
            title: "HISTORY"
          },
          {
            path: "/list",
            title: "PAYLOADS"
          }
        ].map((link) => (
          
          <Link style={{ padding: 20 }} key={link.path} to={link.path}>
            {link.title}{" "}
          </Link>
        ))}
         {/* </nav>   */}
        <Route path="/" exact component={Home} />
        <Route path="/list" component={Payloads} />
        {/* <Route path="/list" component={QuoteList} /> */}
     
      </div>
    </Provider>
  );
};

export default Routes;
