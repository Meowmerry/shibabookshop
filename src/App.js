import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';


class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
						<Route path="/login" component={Login} />
						<Route path="/home" component={Home} />
				
				</Router>
			</div>
		);
	}
}
export default App;