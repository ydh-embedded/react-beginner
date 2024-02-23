import React from "react"
import ReactDOM from "react-dom"

import Navbar from "./components/navbar"


const element = <h1>Hello World</h1>

ReactDOM.render(element, document.getElementById('root'));



ReactDOM.render(<Navbar></Navbar>, document.getElementById('root'));
