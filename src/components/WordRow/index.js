import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	//retrieves the array of sentence words
	const sentArray = Object.values(props);

	//react hooks to hold state
	const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");

	//counter used to increment for unique letter keys
	var counter = 0;

	const counterFunc = () => {
		let initCounter = counter;
		counter++;
		return initCounter;
	}

	const letterArray = sentArray.join(" ").split("");

	console.log(letterArray);
	

	//beginning of keyDown event to evaluate user keyboard input
	// window.addEventListener(onKeyDown, (event) => {
	// 	console.log(event.key);
	// });

	var validatingId = 0;

	window.addEventListener("keydown", (event) => {
		
		console.log(event.key);
		
			var letterId = document.getElementById(`${validatingId}`).textContent.toLowerCase();
			console.log(letterId);
			if (letterId == event.key) {
				alert('success');

			}
		
		window.removeEventListener("keydown", (event));
	})

	return (
		<div>
			
			{sentArray.map((word, index) => (
				<div className="row" key={(word) + (index)}>
					 {word.split("").map((letter) => (
						
						<div className="col  letterSpace {guessed ? 'guessed' : 'notGuessed'}" >
							<span id={counter} key={counterFunc()}>
								{letter}
							</span>
						</div>
					))}

					{index < sentArray.length - 1 ? (
						<div className="col space" ></div>
					) : (
						<span id={counter} key={counterFunc()}></span>
					)}
				</div>
			))}
		</div>
	);
}

export default WordRow;

