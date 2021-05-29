import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Event from './components/pages/Event';
import AddEvent from './components/pages/AddEvent';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>

				<Route exact path='/signup'>
					<Signup />
				</Route>
				<Route exact path='/event'>
					<Event />
				</Route>
				<Route exact path='/addevent'>
					<AddEvent />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
