import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";
import "../../src/App.css";
import Container from "../components/Container";
import WordRow from "../components/WordRow/";

const Homepage = () => {
	//React hooks to render state
	const [unscrambledSentence, setUnscrambledSentence] = useState("");
	const [sentenceArray, setSentenceArray] = useState([]);
	const [scrambledSentence, setScrambledSentence] = useState("");
	const [validatingLetterIndex, setValidatingLetterIndex] = useState(1);

	//initialization function
	useEffect(() => {
		console.log("homepage has mounted");
		loadGame();
	}, []);

	var apiCounter = 1;
	var score = 0;

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

	const scrambleSentence = (unscrambledSentence) => {
		console.log(unscrambledSentence);
		const sentenceArr = unscrambledSentence.split(" ");
		console.log(sentenceArr);
		setSentenceArray(sentenceArr);
		console.log(sentenceArray);
		// sentenceArray.push(sentenceArr);
		const newSentence = [];
		sentenceArr.map((word) => {
			if (word.length > 2) {
				newSentence.push(scrambleWord(word));
			} else {
				newSentence.push(word);
			}
		});
		setScrambledSentence(newSentence.join(" "));
		// scrambledSentence = newSentence.join(" ");
	};

	//loads game; sets score; retrieves sentences from API
	const loadGame = () => {
		console.log("loadgame", apiCounter);
		API.getSentence(apiCounter)
			.then((res) => {
				const unscrambledSentence1 = res.data.data.sentence;
				setUnscrambledSentence(unscrambledSentence1);
				console.log(unscrambledSentence);
				scrambleSentence(unscrambledSentence1);
			})
			.catch((err) => console.log(err));
	};

	//beginning of score calculation function
	const calcScore = () => {
		// setScore(score + 1);
		score++;
	};

	const apiCount = () => {
		console.log("apiCounter", apiCounter);
		apiCounter++;
	};

	console.log("apiCounter", apiCounter);
	console.log("sentenceArray", sentenceArray);
	console.log("scrambledSentence", scrambledSentence);
	console.log("unScrambledSentence", unscrambledSentence);
	console.log("score", score);

	const sentenceCompleted = () => {
		console.log("in sentence finished function");
		calcScore();
	};

	const nextSentence = (event) => {
		event.preventDefault();
		console.log("button clicked");
		apiCount();
		loadGame();
	};

	// setValidatingLetterIndex(1);
	console.log(sentenceArray);
	console.log('validatingLetterIndex', validatingLetterIndex);

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
						<div
							className="row text-center justify-content-center"
							id="directions-text"
						>
							<WordRow
								sent={sentenceArray}
								score={score}
								key={apiCounter}
								sentenceCompleted={sentenceCompleted}
								calcScore={calcScore}
								validatingLetterIndex={validatingLetterIndex}
							/>
							<div className="col-4">
								<button
									type="button"
									className="btn btn-success btn-sm justify-content-center"
									id="nextButton"
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
