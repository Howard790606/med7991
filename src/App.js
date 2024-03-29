import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import "./index.css"

import Main from './containers/Main/Main'

class App extends Component {
	render() {
		return (  
			// <BrowserRouter basename="/my-app">
			<HashRouter>
				<div className="App">
					<Main />
				</div>
			</HashRouter>
		)
	}
}

export default App
