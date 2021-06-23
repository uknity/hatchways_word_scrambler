import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	//retrieves the array of sentence words
	const sentArray = Object.values(props);

	//react hooks to hold state
	const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");

	//initial array of objects
	const array = [
		{
			word: "",
			letters: [],
		},
	];

	//counter used to increment for unique letter keys
	var counter = 0;

	//adds the letters of each word to the array and assigns them a unique key
	const createLetterArray = () => {
		for (let i = 0; i < array.length; i++) {
			const wordToSplit = array[i].word;
			console.log(wordToSplit);
			const letterAr = wordToSplit.split("");

			let indexedLetters = [];

			for (let letterIndex = 0; letterIndex < letterAr.length; letterIndex++) {
				indexedLetters.push([counter, letterAr[letterIndex]]);
				counter++;
			}
			console.log(letterAr);
			array[i].letters = indexedLetters;
		}
	};

	//pushes words into array
	const createWordArray = () => {
		sentArray.map((word, index) => {
			if (index < sentArray.length - 1) {
				var spacedWord = word + " ";
				array.push({ word: spacedWord });
			} else {
				array.push({ word: word });
			}
		});
		array.shift();
		createLetterArray();
	};

	//init - calls function to create word arrays
	createWordArray();
	array.map((letters) => {
		console.log(letters)
	});

	//beginning of keyDown event to evaluate user keyboard input
	window.addEventListener("keydown", (event) => {
		setInputValue(event.key);
	});

	return (
		<div>
			{/* {array.map((letters) => {
				<div className="row">
					{letters.map((letter) => {
						<div className="col" id="letterSpace" key={letter.id}>
							<span className={guessed ? "guessed" : "notGuessed"}>
								{letter}
							</span>
						</div>
					})}
				</div>
			})} */}
			{sentArray.map((word, index) => (
				<div className="row">
					 {word.split("").map((letter, index) => ( 
						
						<div className="col" id="letterSpace" key={`letter` + index}>
							<span className={guessed ? "guessed" : "notGuessed"}>
								{letter}
							</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div className="col" id="space"></div>
					) : (
						<span></span>
					)}
				</div>
			))}
		</div>
	);
}

export default WordRow;
