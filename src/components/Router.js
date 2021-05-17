import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Authen from "../routes/Authen";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "../components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Authen />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
//<> </> 는 Fragment, 부모가 없는데 많은 것들을 render하고 싶을때 사용한다
