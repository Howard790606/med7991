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
				<AdSense.Google
                    client='ca-pub-2123561048947547'
                    slot='7806394673'
                    style={{ width: 500, height: 300, float: 'left' }}
                    format=''
                />
				</div>
			</HashRouter>
		)
	}
}

export default App
