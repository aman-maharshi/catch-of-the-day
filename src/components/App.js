import React from "react"
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

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
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleData={this.loadSampleData} />
            </div>
        )
    }
}

export default App
