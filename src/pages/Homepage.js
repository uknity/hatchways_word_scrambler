import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";
import "../../src/App.css";
import Container from "../components/Container";
import WordRow from "../components/WordRow/";
import { useSelector, useDispatch } from 'react-redux'

const Homepage = () => {
	//React hooks to render state
	const [unscrambledSentence, setUnscrambledSentence] = useState("");
	const [sentenceArray, setSentenceArray] = useState([]);
	const [scrambledSentence, setScrambledSentence] = useState("");
	// const [score, setScore] = useState(0);
	// const [apiCounter, setApiCounter] = useState(1);
	
	

	//initialization function
	useEffect(() => {
		console.log("homepage has mounted");
		loadGame();
	}, []);

	 window.apiCounter = 1;
	 window.score = 0;
	// var score = 0;
	// var validatingLetterIndex = 1;

	

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
		console.log("loadgame", window.apiCounter);
		
		API.getSentence(window.apiCounter)
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
		console.log('calcscore function', window.score);
		window.score++;
		// score++;
	};

	const apiCount = () => {
		console.log("apiCounter", window.apiCounter);
		window.apiCounter++;
		console.log('new apicounter', window.apiCounter);
	};

	// console.log("apiCounter", apiCounter);
	// console.log("sentenceArray", sentenceArray);
	// console.log("scrambledSentence", scrambledSentence);
	// console.log("unScrambledSentence", unscrambledSentence);
	// console.log("score", score);

	const sentenceCompleted = () => {
		console.log("in sentence finished function");
		
		calcScore();
	};

	const nextSentence = (event) => {
		event.preventDefault();
		console.log("button clicked");
		// setValidatingLetterIndex(1);
		// resetValidatingIndex();
		apiCount();
		loadGame();
	};

	// setValidatingLetterIndex(1);
	console.log(sentenceArray);
	// console.log('validatingLetterIndex', validatingLetterIndex);

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
							<p>Score: {window.score}</p>
						</h2>
						<div
							className="row text-center justify-content-center"
							id="directions-text"
						>
							<WordRow
								sent={sentenceArray}
								score={window.score}
								key={window.apiCounter}
								sentenceCompleted={sentenceCompleted}
								calcScore={calcScore}
								
								// validatingLetterIndex={validatingLetterIndex}
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
