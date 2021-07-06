import React from "react";
import "./style.css";
import { useEffect, useState, useCallback } from "react";

function WordRow(props) {
	const { sent, score, sentenceCompleted, calcScore } = props;

	var wordRowAdded = false;

	//retrieves the array of sentence words
	const sentArray = Object.values(sent);

	//console.log("sentArray", sentArray);
	const letterArray = sentArray.join(" ").split("");

	window.sentenceFinished = letterArray.length;

	var counter = 0;

	window.validatingId = 1;

	//increments the counter for the key of each letter in the sentence
	const counterFunc = () => {
		counter++;
		return counter;
	};

	const validIdFunc = () => {
		window.validatingId++;
		return window.validatingId;
	};

	//reset counter upon new sentence load
	const resetCounter = () => {
		return (counter = 0);
	};

	//reset validating id upon new sentence load
	const resetValidatingId = () => {
		return (window.validatingId = 1);
	};

	const handleKeyDown = ({ key }) => {
		var letterCol = document.getElementById(`${window.validatingId}`);
		var letterSpan = letterCol.firstElementChild;

		if (letterSpan === null || letterSpan === undefined) {
			if (key === " ") {
				letterCol.classList.remove("spaceNotGuessed");
				letterCol.classList.add("spaceGuessed");
				validIdFunc();
			} else {
				console.log("please press the space key");
			}
		} else {
			var letterId = letterSpan.textContent.toLowerCase();

			if (letterId === key) {
				letterCol.classList.remove("notGuessedSpace");
				letterCol.classList.add("guessedSpace");
				letterSpan.classList.remove("notGuessed");
				letterSpan.classList.add("guessed");
if (window.validatingId === window.sentenceFinished) {
					resetCounter();
					resetValidatingId();
					validIdFunc();
					props.sentenceCompleted();
				} else {
					window.validatingId++;
				}
			}
		}
	};

	const handleKeyUp = () => {};

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

