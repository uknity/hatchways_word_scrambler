import React from "react";
import "./style.css";
import { useEffect } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } = props;
	console.log(sent);
	console.log(score);
	console.log(sentenceCompleted);
	console.log(props);

	//retrieves the array of sentence words
	const sentArray = Object.values(sent);
	console.log(sentArray);

	//counter used to increment for unique letter keys
	var counter = 0;
	console.log(counter);

	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	};

	const letterArray = sentArray.join(" ").split("");
	console.log(letterArray);

	var validatingId = 0;

	const resetValidatingId = () => {
		validatingId = 0;
	};
	resetValidatingId();

	window.addEventListener("keydown", (event) => {
		console.log(validatingId);
		event.preventDefault();

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
					console.log("good job");
					sentenceCompleted();
				}
			}

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
