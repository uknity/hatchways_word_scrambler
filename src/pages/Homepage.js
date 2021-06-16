import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";

const Homepage = () => {
	// const [displaySentence, setDisplaySentence] = useState("");
	// const [scrambledSentence, setScrambledSentence] = useState("");

	const counter = 1;

	useEffect(() => {
		loadGame();
	});

	const scrambleWord = (word) => {
		var length = word.length;
		var letterArr = word.split("");
		var firstLetter = letterArr[0];
		var lastLetter = letterArr[length-1];
		letterArr.pop();
		letterArr.shift();
		console.log(letterArr);
		const scrambledInside = (letterArr) => {
			for (var i = 0; i < length; i++) {
					var j = Math.floor(Math.random() * length);
					var temp = letterArr[i];
					letterArr[i] = letterArr[j];
					letterArr[j] = temp;
			}
			return letterArr.join("");
		}
			
		const scrambledWord = `${firstLetter}` + `${scrambledInside(letterArr)}` + `${lastLetter}`;
		console.log(scrambledWord);
	};

	const scrambleSentence = (sentence) => {
		const sentenceArr = sentence.split(" ");
		
		sentenceArr.map(word => {
			if (word.length > 2) {
				const scrambledWord = scrambleWord(word);
					console.log(scrambledWord);
				};
			
		})
		
			
		
	};


	const loadGame = () => {
		API.getSentence(counter)
			.then((res) => {
				const unscrambledSentence = res.data.data.sentence;
				scrambleSentence(unscrambledSentence);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			<div className="page-container container-fluid">
				<p>Hello</p>
			</div>
		</div>
	);
};

export default Homepage;
