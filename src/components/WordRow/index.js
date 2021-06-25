import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	console.log(props);
	// var pop = props.pop();
	// console.log(props);
	// const { sentenceInfo } = props;
	
	//retrieves the array of sentence words
	const sentArray = Object.values(props);
	console.log(sentArray);

	

	useEffect(() => {
		resetValidatingId();
	}, []);

	//counter used to increment for unique letter keys
	var counter = 0;

	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	};

	const letterArray = sentArray.join(" ").split("");

	var validatingId = 0;

	const resetValidatingId = () => {
		validatingId = 0;
	}	

	window.addEventListener("keydown", (event) => {
		var letterCol = document.getElementById(`${validatingId}`);
		var letterSpan = letterCol.firstElementChild;
		if (letterSpan == null) {
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
				
				let sentenceFinished = letterArray.length - 1;
				
				if (validatingId === sentenceFinished) {
						console.log('good job');
						// setSentenceCompleted(true);
					}
				};
				
				validatingId++;
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
						>
							{" "}
						</div>
					) : (
						<span className={"notGuessed"}></span>
					)}
				</div>
			))}
		</div>
	);
}

export default WordRow;
