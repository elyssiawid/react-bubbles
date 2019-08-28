import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

const protectRoute = Component => props => {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

const ProtectedBubblePage = protectRoute(BubblePage);

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/BubblePage" component={ProtectedBubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
