import React from "react";
import "./style.css";
import { useEffect, useState, useCallback } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } =
		props;

	//validating id is used to pull the ids from the letters
	// console.log(validatingLetterIndex);
	var vli = 1;
	// var validatingId = validatingLetterIndex;
	// console.log(validatingId);

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

	const resetValidatingIndex = () => {
		return setValidatingLetterIndex(1);
	}
	// var validatingLetterIndex=1;

	//keydown event checks the letter ids with the key pressed, using the validating id to ensure the letters are checked in order
	const handleKeyDown = ({ key }) => {
			console.log(vli);
			let letterCol = document.getElementById(vli);
			let letterSpan = letterCol.firstElementChild;
			console.log(letterSpan);

			//if letter is space block, classlist is changed
			if (letterSpan === null) {
				if (key === " ") {
					letterCol.classList.remove("spaceNotGuessed");
					letterCol.classList.add("spaceGuessed");
					vli++;
					console.log(vli);
				} else {
					alert("Please press the space key.");
				}
				//if letter space is not a space block, letter id is evaluated with the key pressed
			} else {
				var letterId = letterSpan.textContent.toLowerCase();
				console.log(letterId);
				console.log(vli);

				if (letterId === key) {
					letterCol.classList.remove("notGuessedSpace");
					letterCol.classList.add("guessedSpace");
					letterSpan.classList.remove("notGuessed");
					letterSpan.classList.add("guessed");
					vli++;

					if (vli === sentenceFinished) {
						console.log('sentenceFinished', sentenceFinished);
						alert("Good job!");
						resetCounter();
						resetVli();
						props.sentenceCompleted();
					}
				}
			}
		}
	
	const resetVli = () => {
		return vli=1;
	}
// evalFunction();

	const handleKeyUp = () => {};

	useEffect(() => {
		resetVli();
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	// if (sentArray.length < 1) {
	// 	return null;
	// }

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