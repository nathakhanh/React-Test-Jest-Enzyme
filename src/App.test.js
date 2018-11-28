import React from "react";
import App from './App'
import { shallow } from 'enzyme'
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Team from "./Team";

describe('App router functionality', () => {
    let app;
    let routes;

    beforeEach(() => {
        app = shallow(<App />)
        routes = app.find(Route)
    })

    it('renders the laning page by default', () => {
        expect(app.exists()).toBeTruthy()
    })

    it('routes to the landing component by default', () => {
        expect(routes.at(0).props().path).toEqual("/")
        expect(routes.at(0).props().exact).toBeTruthy()
        expect(routes.at(0).props().component).toEqual(LandingPage)
    })

    it('routes to the Team page at /team', () => {
        expect(routes.at(1).props().path).toEqual("/team")
        expect(routes.at(1).props().exact).toBeTruthy()
        expect(routes.at(1).props().component).toEqual(Team)
    })
})
