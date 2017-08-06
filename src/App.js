import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import Home from "./components/Home.js"
var store = require("./reducers/examples.js")
ReactDOM.render(

  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById("root")
)
