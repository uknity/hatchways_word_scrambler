import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	//retrieves the array of sentence words
	const sentArray = Object.values(props);

	//react hooks to hold state
	// const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");
	// const [guessedSpace, setGuessedSpace] = useState(false);
	// const [spaceGuessed, setSpaceGuessed] = useState(false);

	//counter used to increment for unique letter keys
	var counter = 0;

	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	};

	// var guessedSpace = false;
	// var spaceGuessed = false;
	// var guessed = false;

	const letterArray = sentArray.join(" ").split("");

	console.log(letterArray);

	var validatingId = 0;

	window.addEventListener("keydown", (event) => {
		console.log(validatingId);
		console.log(event.keyCode);
		var letterCol = document.getElementById(`${validatingId}`);
		var letterSpan = letterCol.firstElementChild;
		console.log(letterSpan);
		if (letterSpan == null) {
			console.log(event.keyCode);
			if (event.keyCode === 32) {
				
					letterCol.classList.remove("spaceNotGuessed");
					letterCol.classList.add("spaceGuessed");
					validatingId++;
				}
				console.log("please press the space key");
			} else {
				var letterId = letterSpan.textContent.toLowerCase();
				console.log(letterId);
				if (letterId === event.key) {
					letterCol.classList.remove("notGuessedSpace");
					letterCol.classList.add("guessedSpace");
					letterSpan.classList.remove("notGuessed");
					letterSpan.classList.add("guessed");
					validatingId++;
				}
			}
		

		window.removeEventListener("keydown", event);
	});

	return (
		<div>
			{sentArray.map((word, index) => (
				<div className="row" key={word + index}>
					{word.split("").map((letter) => (
						<div
							id={counter}
							key={counterFunc()}
							className={`col letterSpace notGuessedSpace`}
						>
							<span className={"notGuessed"}>{letter}</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div
							id={counter}
							key={counterFunc()}
							className={`col space spaceNotGuessed`}
						> </div>
					) : (
						<span className={"notGuessed"}></span>
					)}
				</div>
			))}
		</div>
	);
}

export default WordRow;
