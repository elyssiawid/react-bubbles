import React from "react";
import Login from "./components/Login.js";
import BubblePage from "./components/BubblePage";
import { Route, Link, Redirect } from "react-router-dom";
import Bubbles from "./components/Bubbles";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const propsWithoutComponent = {...props, component: undefined};
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const protectRoute = Component => props => {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

const ProtectedBubb = protectRoute(BubblePage);

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/BubblePage" component={BubblePage} />
      {/* <Route path="/BubblePage" component={ProtectedBubblePage}/> */}
    </div>
  );
}

export default App;
