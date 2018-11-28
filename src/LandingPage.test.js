import React from 'react'
import LandingPage from './LandingPage'
import { shallow } from "enzyme";

describe("Landing Page", () => {
    let component

    beforeEach(() => {
        component = shallow(<LandingPage />)
    })

    it("greets the user", () => {
        const welcomeElement = component.find('h1');

        expect(welcomeElement.exists()).toEqual(true)
        expect(welcomeElement.text()).toEqual('Welcome to the Fantasy Football App!')
    })

    it('lets the user know why the site exists', () => {
        const welcomeElement = component.find('[data-info]');

        expect(welcomeElement.exists()).toEqual(true)
        expect(welcomeElement.text()).toEqual('The central source for all drafting, roster moves, and the latest player information.')
    })

    it('shows list of 3 undrafted players', () => {
        const undraftedPlayerOne = component.find('#player_one');
        const undraftedPlayerTwo = component.find('#player_two');
        const undraftedPlayerThree = component.find('#player_three');

        expect(undraftedPlayerOne.exists()).toEqual(true)
        expect(undraftedPlayerTwo.exists()).toEqual(true)
        expect(undraftedPlayerThree.exists()).toEqual(true)
        expect(undraftedPlayerOne.text()).toEqual('Player One')
        expect(undraftedPlayerTwo.text()).toEqual('Player Two')
        expect(undraftedPlayerThree.text()).toEqual('Player Three')
    })

    it('shows list of 3 undrafted player using differnt style of selector', () => {
        const table = component.find('[data-player-list]');
        expect(table.find('.player_a').text()).toEqual("Player A")
        expect(table.find('[data-player-b]').text()).toEqual("Player B")
        expect(table.find('#player_c').text()).toEqual("Player C")
        expect(table.childAt(0).text()).toEqual("Player A")
        expect(table.childAt(1).text()).toEqual("Player B")
        expect(table.childAt(2).text()).toEqual("Player C")
    })

    describe("Add Player Functionality", () => {
        it("adds a player when the button is clicked", () => {
            const addPlayerButton = component.find('[data-add-player]')

            expect(addPlayerButton.exists()).toBeTruthy()

            addPlayerButton.simulate('click')

            const playerList = component.find('[data-player-list2]')

            expect(playerList.at(3).length).toBeTruthy()
        })
    })

    describe("Style typed player name", () => {
        const buildEventWith = (value) => ({
            target: {
                value: value
            }
        })

        it("displays the player name on the page when typed in an input", () => {
            const playerInput = component.find('[data-player-input]')

            playerInput.simulate('change', buildEventWith('Best Player in the world Phudith'))

            expect(component.find('[data-style-name]').text()).toEqual("Best Player in the world Phudith")
        })
    })

    describe('Searching for teams', () => {
        const buildEventWith = (value) => ({
            target: {
                value: value
            }
        })

        it('search with whole name', () => {
            let event = buildEventWith("Birmingham Bolts");
            component.find('[data-team-search-input]').simulate("change", event)
            component.find('[data-team-search-submit]').simulate("click")
            let searchResults = component.find('#search_found[data-team-search-results]').text();
            expect(searchResults).toEqual("Birmingham Bolts - Birmingham, Alabama - Colors: Purple, Yellow, Silver")
        })

        it('search with partial name', () => {
            let event = buildEventWith("Bolts");
            component.find('[data-team-search-input]').simulate("change", event)
            component.find('[data-team-search-submit]').simulate("click")
            let searchResults = component.find('#search_found[data-team-search-results]').text();
            expect(searchResults).toEqual("Birmingham Bolts - Birmingham, Alabama - Colors: Purple, Yellow, Silver")
        })

        it('search invalid result', () => {
            let event = buildEventWith("11111");
            component.find('[data-team-search-input]').simulate("change", event)
            component.find('[data-team-search-submit]').simulate("click")
            let searchResults = component.find('#search_not_found[data-team-search-results]').text();
            expect(searchResults).toEqual("No Search Result Found")
        })
    })
})

