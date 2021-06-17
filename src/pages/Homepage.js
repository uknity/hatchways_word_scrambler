import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";

const Homepage = () => {
	const [scrambledSentence, setScrambledSentence] = useState("");

	const counter = 1;

	useEffect(() => {
		loadGame();
	}, []);

	const scrambleWord = (word) => {
		var length = word.length;
		var letterArr = word.split("");
		var firstLetter = letterArr[0];
		var lastLetter = letterArr[length-1];
		letterArr.pop();
		letterArr.shift();
		const scrambledInside = (letterArr) => {
			for (var i = 0; i < length -2 ; i++) {
					var j = Math.floor(Math.random() * length);
					var temp = letterArr[i];
					letterArr[i] = letterArr[j];
					letterArr[j] = temp;
			}
			return letterArr.join("");
		}
			
		// const scrambledWord = `${firstLetter}` + `${scrambledInside(letterArr)}` + `${lastLetter}`;
		// return scrambledWord;
		return(`${firstLetter}` + `${scrambledInside(letterArr)}` + `${lastLetter}`);
	};

	const scrambleSentence = (sentence) => {
		const sentenceArr = sentence.split(" ");
		const newSentence = [];
		sentenceArr.map(word => {
			if (word.length > 2) {
				newSentence.push(scrambleWord(word));
				} else {
					newSentence.push(word);
				}
		});
		setScrambledSentence(newSentence.join(' '));
		
	};

	console.log(scrambledSentence);

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
				<p>{scrambledSentence}</p>
			</div>
		</div>
	);
};

export default Homepage;
