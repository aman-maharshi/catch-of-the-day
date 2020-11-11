import React from "react"

class AddFishForm extends React.Component {
    createFish = e => {
        e.preventDefault()
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }
        this.props.addFish(fish)
        // console.log(fish)
        this.form.reset()
    }

    render() {
        return (
            <form ref={input => (this.form = input)} className="fish-edit" onSubmit={this.createFish}>
                <input ref={input => (this.name = input)} type="text" placeholder="Fish Name" />
                <input ref={input => (this.price = input)} type="number" placeholder="Fish Price" />
                <select ref={input => (this.status = input)}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea ref={input => (this.desc = input)} type="text" placeholder="Fish Description"></textarea>
                <input type="text" ref={input => (this.image = input)} placeholder="Fish Image" />
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

export default AddFishForm
