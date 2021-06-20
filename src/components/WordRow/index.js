import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	const [wordToGuess, setWordToGuess] = useState([]);
    const [spaceArray, setSpaceArray] = useState([]);
	setSpaceArray(Object.values(props));
    console.log(spaceArray);
    
    function createRows(spaceArray) {
        const word = spaceArray.map((word) => {

        })
    }
    
	// console.log(spaceObject);
    
	// console.log(Object.entries(spaceObject));
	// console.log(Object.entries(spaceObject)[0][1]);
	// const spaceArray = Object.entries(spaceObject);
	// console.log(spaceArray);

	//    const spaceArrayMap = spaceArray.map((wordWithIndex) => {
	//     const wordArray = wordWithIndex[1];
	//     console.log(wordArray);
	//    })

	// const word  = props;
	// console.log(word);
	// const wordLength = Object.keys(word).length;
	// console.log(wordLength);
	// const numColumns = wordLength + 1;
	// console.log(numColumns);
	// setWordToGuess(Object.entries(word));

	return (
		<div className="row">
			{/* {wordToGuess.map((letter) => {
                <div className="col-auto">
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
