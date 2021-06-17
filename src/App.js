import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Outcome from "./pages/Outcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/";
import NoMatch from "./pages/NoMatch";


function App() {
	return (
		<Router>
			<div>
				<Wrapper className="container-fluid">
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/outcome" component={Outcome} />
						<Route component={NoMatch} />
					</Switch>
				</Wrapper>
			</div>
		</Router>
	);
}

export default App;
