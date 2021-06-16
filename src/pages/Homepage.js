import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";

const Homepage = () => {
	const [displaySentence, setDisplaySentence] = useState("");
	const [scrambledSentence, setScrambledSentence] = useState("");

	const counter = 1;

	useEffect(() => {
		loadGame();
	});

	const scrambleWord = (word) => {
		console.log(word);
		var length = word.length;

		var letterArr = word.split("");
		console.log(letterArr);
		letterArr.map((letter) => {

			for (var i = 1; i <= length - 1; i++) {
				var j = Math.floor(Math.random() * length);
				var temp = letterArr[i];
				letterArr[i] = letterArr[j];
				letterArr[j] = temp;
			};
			
		});
		var scrambledWord = letterArr.join('');
			console.log(scrambledWord);
			return scrambledWord;
	};

	const scrambleSentence = (sentence) => {
		const sentenceArr = sentence.split(" ");
		sentenceArr.map((word) => {
			if (word.length <= 2) {
			} else {
				var scrambledWord = scrambleWord(word);
				console.log(scrambledWord);
			};
			var newSentence = sentenceArr.join(' ');
			console.log(newSentence);
		});
		// 
	};

	const loadGame = () => {
		API.getSentence(counter)
			.then((res) => {
				setDisplaySentence(res.data.data.sentence);
				scrambleSentence(displaySentence);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			<div className="page-container container-fluid">
				<p>{displaySentence}</p>
			</div>
		</div>
	);
};

export default Homepage;
