import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Outcome from "./pages/Outcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/outcome" component={Outcome} />
			</Switch>
		</Router>
	);
}

export default App;
