import React, { Component } from 'react'

export default class Team extends Component {

    state = {
        playerData: []
    }

    async componentDidMount() {
        const { data } = await axios.get('http://super_cool_site.biz/players')
        this.setState({ playerData: data })
    }

    renderPlayers = (playerData) => {
        return (
            playerData.map(player => {
                <div
                    data-player-name
                    key={player.name}
                >
                    {player.name}
                </div>
            })
        )
    }

    render() {
        const { playerData } = this.state
        if (playerData) {
            console.log(playerData)
            return (
                <div>
                    {this.renderPlayers(playerData)}
                </div>
            )
        }
        else {
            return (<div>Loading.....</div>)
        }
    }
}