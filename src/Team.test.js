import React from 'react'
import axios from 'axios'
import { shallow } from 'enzyme'
import Team from './Team'

jest.mock('axios', () => {
    return {
        get: () => {
            throw "should be mocked"
        }
    }
})

describe('Initial component data', () => {

    beforeEach(() => {
        axios.get = () => Promise.resolve({
            data: [{ name: 'Phudith P.' }]
        })
    })

    describe('When data is able to be fetched', () => {


        it('displays the current fantasy football roster', async () => {
            const team = shallow(<Team />)

            await axios.get()

            // let firstPlayer = team.find('[data-player-name]').at(0).text();



            // expect(firstPlayer.text()).toEqual("Phudith P.")
        })
    })
})