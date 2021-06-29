import React from "react";
import "./style.css";
import { useEffect, useState, useCallback } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } = props;
	
	// console.log('sent', sent);
	// if (sent.length === 0) {
	// 	return null;
	// };
	//counter used to increment for unique letter keys
	//validating id is used to pull the ids from the letters
	// const [counter, setCounter] = useState(0);
	// const [validatingId, setValidatingId] = useState(0);
	

	// useEffect(() => {
	// 	console.log('wordrow mounted');
	// 	resetCounter();
	// 	resetValidatingId();
	// }, []);

	//retrieves the array of sentence words
	const sentArray = Object.values(sent);
	console.log('sentArray', sentArray);
	
	let counter = 0;
	let validatingId = 0;

	//increments the counter for the key of each letter in the sentence
	const counterFunc = () => {
		console.log('in counterFunc');
		counter++;
	};

	const resetCounter = () => {
		counter = 0;
	};

	const resetValidatingId = () => {
		validatingId = 0;
	};

	const letterArray = sentArray.join(" ").split("");

	var sentenceFinished = letterArray.length - 1;

	console.log('sentence finished', sentenceFinished);

	

	const handleKeyDown = (event) => {
		const { key } = event;
		console.log('counter', counter);
		var letterCol = document.getElementById(`${validatingId}`);
	console.log(document.getElementById(0));
		console.log(letterCol);
		var letterSpan = letterCol.firstElementChild;
		console.log(letterSpan);
	  };
	
	  useEffect(() => {
		  resetValidatingId();
		  resetCounter();
		window.addEventListener('keydown', handleKeyDown);
		// window.addEventListener('keyup', handleKeyUp);
	// 	window.removeEventListener('keydown', handleKeyDown)
    //   window.removeEventListener('keyup', handleKeyUp)
	}, []);
	
		
		// window.addEventListener("keydown", (event) => {
		// event.preventDefault();
		// var onKeyPressed = (event) => {
		// 	console.log(event.key);
		// }
	// 	console.log('validatingId', validatingId);
	// 	console.log('counter', counter);
	// 	var letterCol = document.getElementById(`${validatingId}`);
	// 	var letterSpan = letterCol.firstElementChild;

	// 	if (letterSpan === null) {
	// 		if (event.keyCode === 32) {
	// 			console.log('in event letterSpan null and keyCode 32');
	// 			letterCol.classList.remove("spaceNotGuessed");
	// 			letterCol.classList.add("spaceGuessed");
	// 			validatingId++;
	// 			window.removeEventListener("keydown", event)
	// 		} else {
	// 			console.log("please press the space key");
	// 			window.removeEventListener("keydown", event)
	// 		}
	// 	} 
		
	// 	else {
	// 		var letterId = letterSpan.textContent.toLowerCase();

	// 		if (letterId === event.key) {
	// 			letterCol.classList.remove("notGuessedSpace");
	// 			letterCol.classList.add("guessedSpace");
	// 			letterSpan.classList.remove("notGuessed");
	// 			letterSpan.classList.add("guessed");
	// 			console.log('validating id', validatingId);
	// 			console.log(sentenceFinished);

	// 			if (validatingId === sentenceFinished) {
	// 				event.preventDefault();
	// 				console.log("good job");
	// 				window.removeEventListener("keydown", event)
	// 				console.log(validatingId);
	// 				props.sentenceCompleted();
	// 			} else {
	// 				validatingId++;
	// 				window.removeEventListener("keydown", event)
	// 			};
				
	// 		} else {
	// 			console.log('please try again');
	// 		}
	// 	}
	// })

	// }, []);

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
							// onKeyUp={handleKeyUp}
							// tabIndex={0}
						>
							<span className={"notGuessed"}>{letter}</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div
							id={counterFunc()}
							onKeyDown={handleKeyDown}
							key={'space' + index}
							className={`col space spaceNotGuessed`}
							// tabIndex={0}
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
