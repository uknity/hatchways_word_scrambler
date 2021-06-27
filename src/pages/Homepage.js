import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";
import "../../src/App.css";
import Container from "../components/Container";
import WordRow from "../components/WordRow/";

const Homepage = () => {
	//React hooks to render state
	const [scrambledSentence, setScrambledSentence] = useState("");
	const [sentence, setSentence] = useState("");
	const [score, setScore] = useState(0);
	const [sentenceArray, setSentenceArray] = useState([]);
	const [apiCounter, setApiCounter] = useState(1);

	//initialization function
	useEffect(() => {
		loadGame();
	}, []);

	const scrambleWord = (word) => {
		var length = word.length;
		var letterArr = word.split("");
		var firstLetter = letterArr[0];
		var lastLetter = letterArr[length - 1];
		letterArr.pop();
		letterArr.shift();
		const scrambledInside = (letterArr) => {
			for (var i = 0; i < length - 2; i++) {
				var j = Math.floor(Math.random() * length);
				var temp = letterArr[i];
				letterArr[i] = letterArr[j];
				letterArr[j] = temp;
			}
			return letterArr.join("");
		};
		return `${firstLetter}` + `${scrambledInside(letterArr)}` + `${lastLetter}`;
	};

	const scrambleSentence = (sentence) => {
		const sentenceArr = sentence.split(" ");
		setSentenceArray(sentenceArr);
		const newSentence = [];
		sentenceArr.map((word) => {
			if (word.length > 2) {
				newSentence.push(scrambleWord(word));
			} else {
				newSentence.push(word);
			}
		});
		setScrambledSentence(newSentence.join(" "));
	};

	//loads game; sets score; retrieves sentences from API
	const loadGame = () => {
		apiCount();
		console.log(apiCounter);
		setSentenceArray([]);
		setScrambledSentence("");
		API.getSentence(apiCounter)
			.then((res) => {
				const unscrambledSentence = res.data.data.sentence;
				console.log(unscrambledSentence);
				setSentence(unscrambledSentence);
				scrambleSentence(unscrambledSentence);
			})
			.catch((err) => console.log(err));
	};

	//beginning of score calculation function
	const calcScore = () => {
		setScore(score + 1);
	};

	const apiCount = () => {
		setApiCounter(apiCounter + 1);
	};
	console.log(apiCounter);

	// const incrementApiCounter = () => {
	// 	setApiCounter(apiCounter + 1);
	// }

	const sentenceCompleted = () => {
		console.log("in sentence finished function");
		calcScore();
	};

	const nextSentence = () => {
		console.log('button clicked');
		
		loadGame();
	}

	return (
		<div>
			<Container fluid>
				<div className="row justify-content-center" id="contentRow">
					<div className="col-12 col-md-8" id="contentBox">
						<div className="row text-center" id="sentence-text">
							<h1>{scrambledSentence}</h1>
						</div>
						<div className="row text-center" id="directions-text">
							<p>Guess the sentence! Start typing</p>
							<p>The yellow blocks are meant for spaces</p>
						</div>
						<h2 className="row text-center" id="score">
							<p>Score: {score}</p>
						</h2>
						<div className="row text-center justify-content-center" id="directions-text">
							<WordRow
								sent={sentenceArray}
								score={score}
								sentenceCompleted={sentenceCompleted}
								calcScore={calcScore}
							/>
							<div className="col-4">
								<button
									type="button"
									className="btn btn-success btn-sm justify-content-center" id="nextButton"
									onClick={nextSentence}
								>
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Homepage;
