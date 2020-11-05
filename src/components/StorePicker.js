import React from "react"

import { getFunName } from "../helpers"

class StorePicker extends React.Component {
    constructor() {
        super()
        this.storeName = React.createRef()
    }

    goToStore = e => {
        e.preventDefault()
        const inputValue = this.storeName.value.defaultValue
        this.props.history.push(`/store/${inputValue}`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.storeName} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}
export default StorePicker
