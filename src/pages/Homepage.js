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
		letterArr.map((letter) => {
			for (var i = 1; i <= length - 1; i++) {
				var j = Math.floor(Math.random() * length);
				var temp = letterArr[i];
				letterArr[i] = letterArr[j];
				letterArr[j] = temp;
			}
		});
		var scrambledWord = letterArr.join("");
		console.log(scrambledWord);
		return scrambledWord;
	};

	const scrambleSentence = (sentence) => {
		const scrambledSentence = [];
		const sentenceArr = sentence.split(" ");
		sentenceArr.map((word, index) => {
			if (word.length <= 2) {
				scrambledSentence.push(word);
				console.log(scrambledSentence);
			} else {
				scrambleWord(word);
				scrambledSentence.push();
			}
		});
		// sentence = sentenceArr.join('');
		// console.log(sentence);
		// return sentence;
		console.log(scrambledSentence);
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
