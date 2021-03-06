import React from "react"
import { formatPrice } from "../helpers"

class Fish extends React.Component {
    handleAddToOrder = () => {
        const fishKey = this.props.fishKey
        this.props.addToOrder(fishKey)
    }

    render() {
        const details = this.props.details
        const isAvailable = details.status === "available"
        const buttonText = isAvailable ? "Add To Order" : "Sold Out"

        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button disabled={!isAvailable} onClick={this.handleAddToOrder}>
                    {buttonText}
                </button>
            </li>
        )
    }
}

export default Fish
