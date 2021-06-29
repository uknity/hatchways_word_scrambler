import React from "react";
import "./style.css";
import { useEffect } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } = props;
	console.log(sent);
	// console.log(score);
	// console.log(sentenceCompleted);
	// console.log(props);

	//retrieves the array of sentence words
	const sentArray = Object.values(sent);
	// console.log(sentArray);

	//counter used to increment for unique letter keys
	//validating id is used to pull
	var validatingId;
	var counter;
	// var counter = 0;

	//increments the counter for the key of each letter in the sentence
	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	};

	// const resetCounter = () => {
	// 	counter = 0;
	// };

	const letterArray = sentArray.join(" ").split("");

	

	// const resetValidatingId = () => {
	// 	validatingId = 0;
	// };

	var sentenceFinished = letterArray.length - 1;

	const wordRowInit = () => {
		validatingId = 0;
		counter = 0;
	}

	wordRowInit();
	console.log('sentence finished', sentenceFinished);

	window.addEventListener("keydown", (event) => {
		// event.preventDefault();
		console.log('validatingId', validatingId);
		console.log('counter', counter);
		var letterCol = document.getElementById(`${validatingId}`);
		var letterSpan = letterCol.firstElementChild;

		if (letterSpan === null) {
			if (event.keyCode === 32) {
				letterCol.classList.remove("spaceNotGuessed");
				letterCol.classList.add("spaceGuessed");
				validatingId++;
				window.removeEventListener("keydown", event)
			} else {
				console.log("please press the space key");
				window.removeEventListener("keydown", event)
			}
		} 
		
		else {
			var letterId = letterSpan.textContent.toLowerCase();

			if (letterId === event.key) {
				letterCol.classList.remove("notGuessedSpace");
				letterCol.classList.add("guessedSpace");
				letterSpan.classList.remove("notGuessed");
				letterSpan.classList.add("guessed");
				console.log('validating id', validatingId);
				console.log(sentenceFinished);

				if (validatingId === sentenceFinished) {
					event.preventDefault();
					console.log("good job");
					window.removeEventListener("keydown", event)
					// resetValidatingId();
					console.log(validatingId);
					// resetCounter();
					props.sentenceCompleted();
				} else {
					validatingId++;
					window.removeEventListener("keydown", event)
				};
				
			} else {
				console.log('please try again');
			}
		}
	});

	return (
		<div>
			{sentArray.map((word, index) => (
				<div className="row" key={word + index}>
					{word.split("").map((letter) => (
						<div
							id={counterFunc()}
							key={letter.id}
							className={`col letterSpace notGuessedSpace`}
						>
							<span className={"notGuessed"}>{letter}</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div
							id={counterFunc()}
							key={'space' + index}
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
