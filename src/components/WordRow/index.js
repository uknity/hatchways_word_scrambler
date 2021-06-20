import React from "react";
import "./style.css";

function WordRow(props) {
    console.log(props);
	const word  = props;
    console.log(word);
    const wordLength = word.length;
    console.log(wordLength);

	return (
		<div className="row">
            {/* {word.map((letter) => {
                <div className="`col-${(12 / (word.length)) + 1}`">
                {letter}
                </div>
             })} */}
			
		</div>
	);
}

export default WordRow;

// <div className="card mt-5 mb-5">
// 				<div className="card-body">
// 					{/* project name */}
// 					<div className="card-header cardHeader">
// 						<h5 className="projectTitle">
// 							<strong>{title}</strong>
// 						</h5>
// 					</div>
// 				</div>
// 				{/* image */}
// 				<img className="card-img-top" src={image} alt="tech" />
// 				<ul className="list-group list-group-flush linkSpace">
// 					<li className="list-group-item">
// 						<a
// 							href={link}
// 							className="card-link"
// 							target="blank"
// 							rel="noopener noreferrer"
// 						>
// 							Click here for link
// 						</a>
// 					</li>
// 					<li className="list-group-item" key={_id}>
// 						<button
// 							onClick={() => {
// 							props.handleProjectSelect(_id);
// 							}}
// 							className="btn btn-secondary selectProjectBut"
// 						>
// 							Select Project
// 						</button>
// 					</li>
// 				</ul>
// 			</div>