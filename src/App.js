import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import "./index.css"

import Blog from './containers/Blog/Blog'

class App extends Component {
	render() {
		return (  
			// <BrowserRouter basename="/my-app">
			<HashRouter>
				<div className="App"  style={{ height: 1050}}>
					<Blog />
				</div>
			</HashRouter>
		)
	}
}

export default App
