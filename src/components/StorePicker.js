import React from "react"

import { getFunName } from "../helpers"

class StorePicker extends React.Component {
    goToStore = e => {
        e.preventDefault()
        // getting the input value
        const input = this.storeName.value
        // changing the url
        this.props.history.push(`/store/${input}`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input
                    type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                    ref={input => {
                        this.storeName = input
                    }}
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}
export default StorePicker
