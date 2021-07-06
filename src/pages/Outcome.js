import React from "react";
import Container from "../components/Container";

//renders outcome screen upon winning game
function Outcome() {
	return (
		<div>
			<Container fluid>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 d-flex justify-content-center align-items-center" id="contentBox">You win!
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Outcome;
