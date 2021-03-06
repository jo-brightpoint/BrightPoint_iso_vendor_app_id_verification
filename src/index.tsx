import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-pro/js/all";
import Success from "./components/Success";
import IdVerification from "./components/idVerification";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/apply" render={props => <App />} />
        <Route exact path="/success" render={props => <Success />} />
        <Route exact path="/idVerification" render={props => <IdVerification/>} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
