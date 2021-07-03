import React from "react";
import "./style.css";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice';

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } = props;
	//retrieves the array of sentence words
	const sentArray = Object.values(sent);
	console.log("sentArray", sentArray);
	const letterArray = sentArray.join(" ").split("");
	console.log('letterArray length', letterArray.length);
	
	window.sentenceFinished  = letterArray.length;
	
	console.log("sentence finished", window.sentenceFinished);

	// const [validatingIndex, setValidatingIndex] = useState(1);

	// const incrementValidatingIndex = () => {
	// 	setValidatingIndex(prevValidatingIndex => prevValidatingIndex + 1);
	// }

	//counter used to increment for unique letter keys
	//validating id is used to pull the ids from the letters
	var counter = 0;

	// const validatingIndex = useSelector(state => state.counter.value);
	// const dispatch = useDispatch();
	

	//increments the counter for the key of each letter in the sentence
	const counterFunc = () => {
		counter++;
		return counter;
	};

	window.validatingIndex = 1;

	// const validIdFunc = () => {
	// 	validatingId++;
	// 	return validatingId;
	// };

	//reset counter upon new sentence load
	const resetCounter = () => {
		return counter = 0;
	};

	//reset validating id upon new sentence load
	// const resetValidatingId = () => {
	// 	return validatingId = 1;
	// };

	const handleKeyDown = ({ key }) => {
		console.log("in handle key down func", window.validatingIndex);
		console.log("key", key);
		var letterCol = document.getElementById(`${window.validatingIndex}`);
		var letterSpan = letterCol.firstElementChild;
		console.log(letterSpan);
		if (letterSpan === null) {
			if (key === " ") {
				letterCol.classList.remove("spaceNotGuessed");
				letterCol.classList.add("spaceGuessed");
				// dispatch(increment());
				// validatingId++;
				window.validatingIndex++;
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
				console.log("validating id", window.validatingIndex);
				console.log('sentenceFinished', window.sentenceFinished);

				if (window.validatingIndex === window.sentenceFinished) {
					console.log("good job");
					resetCounter();
					// resetValidatingId();
					props.sentenceCompleted();
				} else {
					// incrementwindow.validatingIndex();
					window.validatingIndex++;
					console.log(window.validatingIndex);
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


// import React from "react";
// import "./style.css";
// import { useEffect, useState, useCallback } from "react";

// function WordRow(props) {
// 	const { sent, score, sentenceCompleted, calcScore, validatingLetterIndex } =
// 		props;

// 	//validating id is used to pull the ids from the letters
// 	console.log("validatingLetterIndex", validatingLetterIndex);

// 	const sentArray = Object.values(sent);
// 	const letterArray = sentArray.join(" ").split("");
// 	const sentenceFinished = letterArray.length;

// 	const [vi, setVi] = useState();

// 	useEffect(() => {
// 		window.addEventListener("keydown", handleKeyDown);
// 		window.addEventListener("keyup", handleKeyUp);
// 		setVi(validatingLetterIndex);
// 		console.log(vi);

// 		return () => {
// 			window.removeEventListener("keydown", handleKeyDown);
// 			window.removeEventListener("keyup", handleKeyUp);
// 		};
// 	}, []);
// 	console.log(vi);

	

// 	// const incrementValIndex = (vi) => {
// 	// 	vi++;
// 	// 	console.log(vi);
// 	// };

// 	//counter used to increment for unique letter keys
// 	var counter = 0;

// 	//increments the counter for the key of each letter in the sentence
// 	const counterFunc = () => {
// 		counter++;
// 		return counter;
// 	};

// 	//reset counter upon new sentence load
// 	const resetCounter = () => {
// 		return (counter = 0);
// 	};

// 	//keydown event checks the letter ids with the key pressed, using the validating id to ensure the letters are checked in order
// 	const handleKeyDown = ({ key }, event) => {
		
// 		return validateKeycode(key, event);
// 	};

	
// 	const validateKeycode = (key, event, vi) => {
// 		let valueIndex = vi;
// 		console.log('valueIndex', valueIndex);
// 		console.log("key", key);
		
// 		let letterCol = document.getElementById(valueIndex);
// 		let letterSpan = letterCol.firstElementChild;
// 		console.log(letterSpan);
// 		//if letter is space block, classlist is changed
// 		if (letterSpan === null) {
// 			if (key === " ") {
// 				letterCol.classList.remove("spaceNotGuessed");
// 				letterCol.classList.add("spaceGuessed");
// 				valueIndex++;
// 				setVi(valueIndex);
				
// 				console.log(vi);
// 			} else {
// 				alert("Please press the space key.");
// 			}
// 			//if letter space is not a space block, letter id is evaluated with the key pressed
// 		} else {
// 			var letterId = letterSpan.textContent.toLowerCase();
// 			console.log(letterId);
// 			console.log(vi);

// 			if (letterId === key) {
// 				letterCol.classList.remove("notGuessedSpace");
// 				letterCol.classList.add("guessedSpace");
// 				letterSpan.classList.remove("notGuessed");
// 				letterSpan.classList.add("guessed");
// 				// valIndex++;
// 				valueIndex++;
// 				setVi(valueIndex);
// 				console.log(vi);

// 				if (vi === sentenceFinished) {
// 					console.log("sentenceFinished", sentenceFinished);
// 					alert("Good job!");
// 					resetCounter();
// 					// resetVli();
// 					props.sentenceCompleted();
// 				}
// 			}
// 		}
// 	};

// 	// const resetVli = () => {
// 	// 	return vli=1;
// 	// }
// 	// evalFunction();

// 	const handleKeyUp = () => {};

// 	// if (sentArray.length < 1) {
// 	// 	return null;
// 	// }

// 	return (
// 		<div>
// 			{sentArray.map((word, index) => (
// 				<div className="row" key={word + index}>
// 					{word.split("").map((letter) => (
// 						<div
// 							id={counterFunc()}
// 							key={letter.id}
// 							className={`col letterSpace notGuessedSpace`}
// 							onKeyDown={handleKeyDown}
// 						>
// 							<span className={"notGuessed"}>{letter}</span>
// 						</div>
// 					))}

// 					{index < sentArray.length - 1 ? (
// 						<div
// 							id={counterFunc()}
// 							onKeyDown={handleKeyDown}
// 							key={"space" + index}
// 							className={`col space spaceNotGuessed`}
// 						>
// 							{" "}
// 						</div>
// 					) : (
// 						<span className={"notGuessed"}></span>
// 					)}
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default WordRow;

//for (let i = 0; i < sentenceFinished; i++) {
// 		console.log('key pressed');
// 		var letterCol = document.getElementById(i);
// 		var letterSpan = letterCol.firstElementChild;
// 		//if letter is space block, classlist is changed
// 		if (letterSpan === null) {
// 			if (key === " ") {
// 				letterCol.classList.remove("spaceNotGuessed");
// 				letterCol.classList.add("spaceGuessed");
// 				// validatingId++;
// 			} else {
// 				alert("Please press the space key.");
// 			}
// 			//if letter space is not a space block, letter id is evaluated with the key pressed
// 		} else {
// 			var letterId = letterSpan.textContent.toLowerCase();

// 			if (letterId === key) {
// 				letterCol.classList.remove("notGuessedSpace");
// 				letterCol.classList.add("guessedSpace");
// 				letterSpan.classList.remove("notGuessed");
// 				letterSpan.classList.add("guessed");

// 				if (i === sentenceFinished) {
// 					alert("Good job!");
// 					resetCounter();
// 					props.sentenceCompleted();
// 				}
// 			}
// 		}
// 	}
// };

//

// console.log('validatingId', validatingId);
// var letterCol = document.getElementById(validatingId);
// var letterSpan = letterCol.firstElementChild;

//if letter is space block, classlist is changed
// 	if (letterSpan === null) {
// 		if (key === " ") {
// 			letterCol.classList.remove("spaceNotGuessed");
// 			letterCol.classList.add("spaceGuessed");
// 			validatingId++;
// 		} else {
// 			alert("Please press the space key.");
// 		}
// 		//if letter space is not a space block, letter id is evaluated with the key pressed
// 	} else {
// 		var letterId = letterSpan.textContent.toLowerCase();

// 		if (letterId === key) {
// 			letterCol.classList.remove("notGuessedSpace");
// 			letterCol.classList.add("guessedSpace");
// 			letterSpan.classList.remove("notGuessed");
// 			letterSpan.classList.add("guessed");

// 			if (validatingId === sentenceFinished) {
// 				alert("Good job!");
// 				resetCounter();

// 				props.sentenceCompleted();
// 			} else {
// 				validatingId++;
// 			}
// 		}
// 	}
// };
