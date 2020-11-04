import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./css/style.css"
import "./css/custom.css"

import StorePicker from "./components/StorePicker"
import App from "./components/App"
import NotFound from "./components/NotFound"

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={StorePicker} />
                <Route path="/store/:storeId" component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.querySelector("#main"))
