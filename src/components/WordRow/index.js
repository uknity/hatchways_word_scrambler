import React from "react";
import "./style.css";
import { useEffect, useState, useCallback } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } = props;
	//retrieves the array of sentence words
	const sentArray = Object.values(sent);
	console.log("sentArray", sentArray);
	const letterArray = sentArray.join(" ").split("");
	console.log('letterArray length', letterArray.length);
	const sentenceFinished = letterArray.length;
	console.log("sentence finished", sentenceFinished);

	//counter used to increment for unique letter keys
	//validating id is used to pull the ids from the letters
	var counter = 0;
	var validatingId = 1;

	//increments the counter for the key of each letter in the sentence
	const counterFunc = () => {
		counter++;
		return counter;
	};

	const validIdFunc = () => {
		validatingId++;
		return validatingId;
	};

	//reset counter upon new sentence load
	const resetCounter = () => {
		return counter = 0;
	};

	//reset validating id upon new sentence load
	const resetValidatingId = () => {
		return validatingId = 1;
	};

	const handleKeyDown = ({ key }) => {
		console.log("in handle key down func", validatingId);
		console.log("key", key);
		var letterCol = document.getElementById(`${validatingId}`);
		var letterSpan = letterCol.firstElementChild;
		if (letterSpan === null) {
			if (key === " ") {
				letterCol.classList.remove("spaceNotGuessed");
				letterCol.classList.add("spaceGuessed");
				validIdFunc();
				// validatingId++;
			} else {
				console.log("please press the space key");
			}
		} else {
			var letterId = letterSpan.textContent.toLowerCase();
			console.log('letter id', letterId);

			if (letterId === key) {
				letterCol.classList.remove("notGuessedSpace");
				letterCol.classList.add("guessedSpace");
				letterSpan.classList.remove("notGuessed");
				letterSpan.classList.add("guessed");
				console.log("validating id", validatingId);
				console.log('sentenceFinished', sentenceFinished);

				if (validatingId === sentenceFinished) {
					console.log("good job");
					resetCounter();
					resetValidatingId();
					props.sentenceCompleted();
				} else {
					validIdFunc();
					// validatingId++;
				};
			};
			} 
		};

		const handleKeyUp = () => {

		}
	

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return (
		<div>
			{sentArray.map((word, index) => (
				<div className="row" key={word + index}>
					{word.split("").map((letter) => (
						<div
							id={counterFunc()}
							key={letter.id}
							className={`col letterSpace notGuessedSpace`}
							onKeyDown={handleKeyDown}
						>
							<span className={"notGuessed"}>{letter}</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div
							id={counterFunc()}
							onKeyDown={handleKeyDown}
							key={"space" + index}
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

//const handleKeyUp = ({ key }) => {
	// 	var letterCol = document.getElementById(`${validatingId}`);
	// 	var letterSpan = letterCol.firstElementChild;
	// 	if (letterSpan === null) {
	// 		if (key === " ") {
	// 			// setKeyPressed(false);
	// 			letterCol.classList.remove("spaceNotGuessed");
	// 			letterCol.classList.add("spaceGuessed");
	// 			validatingId++;
	// 		} else {
	// 			console.log("please press the space key");
	// 		}
	// 	} else {
	// 		var letterId = letterSpan.textContent.toLowerCase();
	// 		console.log(letterId);

	// 		if (letterId === key) {
	// 			letterCol.classList.remove("notGuessedSpace");
	// 			letterCol.classList.add("guessedSpace");
	// 			letterSpan.classList.remove("notGuessed");
	// 			letterSpan.classList.add("guessed");
	// 			console.log("validating id", validatingId);
	// 			console.log(sentenceFinished);

	// 			if (validatingId === sentenceFinished) {
	// 				console.log("good job");
	// 				console.log(validatingId);
	// 				props.sentenceCompleted();
	// 			} else {
	// 				validatingId++;
	// 			};
	// 		};
	// 		} 
	// 	} 
	// };

// console.log('sent', sent);
// if (sent.length === 0) {
// 	return null;
// };

//const [counter, setCounter] = useState(0);
// const [validatingId, setValidatingId] = useState(0);

// useEffect(() => {
// 	console.log('wordrow mounted');
// 	resetCounter();
// 	resetValidatingId();
// }, []);

// switch(letterSpan) {
// 	case (letterSpan === null && event.keyCode === 32):
// 		letterCol.classList.remove("spaceNotGuessed");
// 	letterCol.classList.add("spaceGuessed");
// 	validatingId++;
// 	window.removeEventListener("keydown", event);

// 	case (letterSpan === null && event.keyCode !== 32):
// 		console.log("please press the space key");
// 		window.removeEventListener("keydown", event);

// 	case (letterSpan !== null && letterId === event.key && validatingId === sentenceFinished):
// 		var letterId = letterSpan.textContent.toLowerCase();
// 		letterCol.classList.remove("notGuessedSpace");
// 	letterCol.classList.add("guessedSpace");
// 	letterSpan.classList.remove("notGuessed");
// 	letterSpan.classList.add("guessed");
// 		console.log("good job");
// 		window.removeEventListener("keydown", event)
// 		resetValidatingId();
// 		resetCounter();
// 		sentenceCompleted();

// 	case (letterSpan !== null && letterId === event.key && validatingId !== sentenceFinished):
// 		var letterId = letterSpan.textContent.toLowerCase();
// 		letterCol.classList.remove("notGuessedSpace");
// 	letterCol.classList.add("guessedSpace");
// 	letterSpan.classList.remove("notGuessed");
// 	letterSpan.classList.add("guessed");
// 	validatingId++;
// 	window.removeEventListener("keydown", event);
// 	default:
// 		console.log("please try again");

// }
// })

// if (letterSpan === null && event.keyCode === 32) {
// 	letterCol.classList.remove("spaceNotGuessed");
// 	letterCol.classList.add("spaceGuessed");
// 	validatingId++;
// 	window.removeEventListener("keydown", event)

// } else if (letterSpan === null && event.keyCode !== 32) {
// 		console.log("please press the space key");
// } else {
// var letterId = letterSpan.textContent.toLowerCase();

// if (letterId === event.key && validatingId === sentenceFinished) {
// 	letterCol.classList.remove("notGuessedSpace");
// 	letterCol.classList.add("guessedSpace");
// 	letterSpan.classList.remove("notGuessed");
// 	letterSpan.classList.add("guessed");
// 		console.log("good job");
// 		window.removeEventListener("keydown", event)
// 		resetValidatingId();
// 		resetCounter();
// 		sentenceCompleted();
// 	}
// 	else if (letterId === event.key && validatingId !== sentenceFinished) {
// 		letterCol.classList.remove("notGuessedSpace");
// 		letterCol.classList.add("guessedSpace");
// 		letterSpan.classList.remove("notGuessed");
// 		letterSpan.classList.add("guessed");
// 			console.log(validatingId);
// 		validatingId++;
// 	window.removeEventListener("keydown", event)
// }
// }
// });
