import React from "react";
import "./style.css";
import { useEffect, useState, useCallback } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore, validatingLetterIndex } =
		props;

	//validating id is used to pull the ids from the letters
	// var validatingId = validatingLetterIndex;
	const sentArray = Object.values(sent);
	const letterArray = sentArray.join(" ").split("");
	const sentenceFinished = letterArray.length;

	//counter used to increment for unique letter keys
	var counter = 0;

	//increments the counter for the key of each letter in the sentence
	const counterFunc = () => {
		counter++;
		return counter;
	};

	//reset counter upon new sentence load
	const resetCounter = () => {
		return (counter = 0);
	};

	//keydown event checks the letter ids with the key pressed, using the validating id to ensure the letters are checked in order
	const handleKeyDown = ({ key }) => {
		console.log('key pressed', key);
	}

	const evalFunction = () => {
		for (let i = 0; i < sentenceFinished; i++) {
			console.log('in evalFunction i is', i);
			let indexNum = i;
			let letterCol = document.getElementById(`${indexNum}`);
			console.log(letterCol);
			let letterSpan = letterCol.firstElementChild;
			console.log(indexNum);

			let keyPressed = handleKeyDown();
			console.log(keyPressed);
			//if letter is space block, classlist is changed
			if (letterSpan === null) {
				if (keyPressed === " ") {
					letterCol.classList.remove("spaceNotGuessed");
					letterCol.classList.add("spaceGuessed");
				} else {
					alert("Please press the space key.");
				}
				//if letter space is not a space block, letter id is evaluated with the key pressed
			} else {
				var letterId = letterSpan.textContent.toLowerCase();
				console.log(letterId);

				if (letterId === keyPressed) {
					letterCol.classList.remove("notGuessedSpace");
					letterCol.classList.add("guessedSpace");
					letterSpan.classList.remove("notGuessed");
					letterSpan.classList.add("guessed");

					if (i === sentenceFinished) {
						alert("Good job!");
						resetCounter();
						props.sentenceCompleted();
					}
				}
			}
		}
	};
	
evalFunction();

	const handleKeyUp = () => {};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	if (sentArray.length < 1) {
		return null;
	}

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