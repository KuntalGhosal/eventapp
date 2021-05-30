import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect , useHistory} from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Event from "./components/pages/Event";
import AddEvent from "./components/pages/AddEvent";
import Store from "./store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// export const history = useHistory();
import { createBrowserHistory} from 'history';
// const history = createBrowserHistory()

function App(props) {
	 const history = useHistory();
  const store = useSelector((state) => state);
  console.log("STORE", store);
  useEffect(() => {
	  console.log(store.auth);
	  if(store.auth.Authenticated)
	  history.push('/event')
	  else history.push('/')
  }, [store.auth.Authenticated]);
function PrivateRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated 
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}
  return (
		//        <Route exact path="/" render={() =>(
        //   store.auth.Authenticated ? (<> <Route exact path="/" component={Login} />
		//   <Route exact path="/signup" component={Signup} /></>)
        //   : (<Route component={Login} />)
        // )} />
		<Switch>
			  <Route exact path="/" component={Login} />
			  <Route exact path="/signup" component={Signup} />
	  <Route authenticated={store.auth.Authenticated} path='/event' component={Event} />
	  <Route authenticated={store.auth.Authenticated} path='/addevent' component={AddEvent} />
	  </Switch>
  );
}

export default App;
