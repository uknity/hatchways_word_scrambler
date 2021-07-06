import React from "react";
import Container from "../components/Container";

//render no match page if incorrect url entered
const NoMatch = () => {
  return (
    <Container fluid>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 d-flex justify-content-center align-items-center" id="contentBox">
          <div className="jumbotron">
            <h1>404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
					</div>
				</div>
			</Container>
   
  );
};

export default NoMatch;