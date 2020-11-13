import React from "react"
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import Fish from "./Fish"

import sampleData from "../sample-fishes"

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        const fishes = this.state.fishes
        const timeStamp = Date.now()
        // adding the new fish with a fish-datestring key
        fishes[`fish-${timeStamp}`] = fish
        // updating the state
        this.setState({ fishes: fishes })
    }

    loadSampleData = () => {
        this.setState({
            fishes: sampleData
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Food Store" />
                    <ul className="list-of-fishes">
                        {Object.keys(this.state.fishes).map(item => {
                            return <Fish key={item} details={this.state.fishes[item]} />
                        })}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleData={this.loadSampleData} />
            </div>
        )
    }
}

export default App
