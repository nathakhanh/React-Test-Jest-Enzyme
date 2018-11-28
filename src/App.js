import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Team from "./Team";

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={LandingPage} />
                        <Route exact path={"/team"} component={Team} />
                    </Switch>
                </Router>
            </div>
        )
    }
}