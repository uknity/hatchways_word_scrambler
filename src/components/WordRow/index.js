import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	//retrieves the array of sentence words
	const sentArray = Object.values(props);

	//react hooks to hold state
	const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [guessedSpace, setGuessedSpace] = useState(false);
	const [spaceGuessed, setSpaceGuessed] = useState(false);

	//counter used to increment for unique letter keys
	var counter = 0;

	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	}

	const letterArray = sentArray.join(" ").split("");

	console.log(letterArray);

	var validatingId = 0;

	window.addEventListener("keydown", (event) => {
		console.log(validatingId);	
		var letterCol = document.getElementById(`${validatingId}`);
			// var letterSpace = 
			var letterId = letterCol.firstElementChild.textContent.toLowerCase();
			console.log(letterId);
			if (letterId === event.key) {
				letterCol.className = {guessedSpace};
				// letterId.className={guessed};
				validatingId++;
			}
		
		window.removeEventListener("keydown", (event));
	})

	return (
		<div>
			{sentArray.map((word, index) => (
				<div className="row" key={(word) + (index)}>
					 {word.split("").map((letter) => (
						
						<div id={counter} key={counterFunc()} className={`col letterSpace ${guessedSpace ? 'guessedSpace' : 'notGuessedSpace'}`}  >
							<span  className={guessed ? 'guessed' : 'notGuessed'}>
								{letter}
							</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div id={counter} key={counterFunc()} className={`col space ${spaceGuessed ? 'spaceGuessed' : 'spaceNotGuessed'}`} ></div>
					) : (
						<span  className={guessed ? 'guessed' : 'notGuessed'}></span>
					)}
				</div>
			))}
		</div>
	);
}

export default WordRow;

