import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Ayth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (<>
                <Route exact path="/">
                    <Home />
                </Route> 
                </>)
                    : <Route exact path="/"><Auth /></Route>}
            </Switch>
        </Router>
    );
};

export default AppRouter;
//<> </> 는 Fragment, 부모가 없는데 많은 것들을 render하고 싶을때 사용한다