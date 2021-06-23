import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	//retrieves the array of sentence words
	const sentArray = Object.values(props);

	//react hooks to hold state
	const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [letterArray, setLetterArray] = useState([]);

	//counter used to increment for unique letter keys
	var counter = 0;

	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	}

	const createLetterArray = () => {
		var sentenceString = sentArray.join(" ");
		var letArray = sentenceString.split("");
		setLetterArray(letArray);

	}

	createLetterArray();
	console.log(letterArray);
	
	//beginning of keyDown event to evaluate user keyboard input
	window.addEventListener("keydown", (event) => {
		setInputValue(event.key);
		console.log(inputValue);
	});

	return (
		<div>
			
			{sentArray.map((word, index) => (
				<div className="row" key={index}>
					 {word.split("").map((letter) => ( 
						
						<div className="col letterSpace" id={counter} key={counterFunc()}>
							<span className={guessed ? "guessed" : "notGuessed"}>
								{letter}
							</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div className="col space" id={counter} key={counterFunc()}></div>
					) : (
						<span></span>
					)}
				</div>
			))}
		</div>
	);
}

export default WordRow;

