import React, { Component } from 'react'
import './LandingPage.css'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerList: [
                'Player One',
                'Player Two',
                'Player Three'
            ],
            playerInput: "Type text to replace",
            team: [
                {
                    id: 1,
                    name: "Birmingham Bolts",
                    location: "Birmingham, Alabama",
                    colors: "Purple, Yellow, Silver"
                }, {
                    id: 2,
                    name: "Orlando Rage",
                    location: "Orlando, Florida",
                    colors: "Red, Navy, Gold, White"
                }, {
                    id: 3,
                    name: "Seattle Street Sharks",
                    location: "Seattle, Washington",
                    colors: "Red, Gray, Blue, Black"
                }
            ],
            searchInput: "",
            searchResults: ""
        }
        // this.searchPlayer = this.searchPlayer.bind(this)
    }

    renderPlayerList() {
        return this.state.playerList.map(((player, i) => <li key={i} data-player-list2>{player}</li>))
    }

    addPlayer = () => {
        const newList = [...this.state.playerList, 'SOME PLAYER']
        this.setState({
            playerList: newList
        })
    }

    handlePlayerInput = ({ target: { value } }) => {
        // const { playerInput, playerList } = this.state

        this.setState({
            playerInput: value
        })
    }

    renderPlayerInput() {
        return <h3 data-style-name>{this.state.playerInput}</h3>
    }

    handleInputSearch = ({ target: { value } }) => {
        this.setState({ searchInput: value })
    }

    searchPlayer = () => {
        const { team } = this.state
        let resultTeam = undefined
        team.forEach(val => {
            if (val.name.includes(this.state.searchInput)) {
                resultTeam = val
            }
        })

        let resultString = ""
        if (resultTeam) {
            resultString = `${resultTeam.name} - ${resultTeam.location} - Colors: ${resultTeam.colors}`
        } else {
            resultString = "No Search Result Found"
        }

        this.setState({
            searchResults: resultString
        })

    }

    render() {
        return (
            <div className="App">
                <h1>Welcome to the Fantasy Football App!</h1>
                <h3 data-info>The central source for all drafting, roster moves, and the latest player information.</h3>

                <div id="player_one">Player One</div>
                <div id="player_two">Player Two</div>
                <div id="player_three">Player Three</div>

                <ul data-player-list>
                    <li className="player_a">Player A</li>
                    <li data-player-b>Player B</li>
                    <li id="player_c">Player C</li>
                </ul>

                <ul>
                    {this.renderPlayerList()}
                </ul>

                <input
                    type="button"
                    data-add-player
                    onClick={this.addPlayer}
                    value="Add Player"
                />

                <div>
                    <input
                        type="input"
                        data-player-input
                        onChange={this.handlePlayerInput}
                    />


                </div>

                {this.renderPlayerInput()}


                <div>
                    <input
                        type="text"
                        data-team-search-input
                        onChange={this.handleInputSearch}
                    />

                    <button
                        data-team-search-submit
                        onClick={this.searchPlayer}
                    >
                        Search!
                    </button>
                </div>

                {
                    this.state.searchResults === "No Search Result Found"
                        ?
                        <div data-team-search-results id="search_not_found">{this.state.searchResults}</div>
                        :
                        <div data-team-search-results id="search_found">{this.state.searchResults}</div>
                }

            </div>
        )
    }
}

export default LandingPage
