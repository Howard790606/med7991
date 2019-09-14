import React, { Component } from 'react'
import AdSense from 'react-adsense';
import { HashRouter } from 'react-router-dom'
import "./index.css"

import Blog from './containers/Blog/Blog'

class App extends Component {
	render() {
		return (  
			// <BrowserRouter basename="/my-app">
			<HashRouter>
				<div className="App" style={{ height: 900}}>
					<Blog />
				</div>
			</HashRouter>
		)
	}
}

export default App
