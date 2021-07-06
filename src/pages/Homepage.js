import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";
import "../../src/App.css";
import Container from "../components/Container";
import WordRow from "../components/WordRow/";
import { useHistory } from "react-router-dom";

window.apiCounter = 1;
window.score = 0;

const Homepage = () => {
	//React hooks to render state
	const [unscrambledSentence, setUnscrambledSentence] = useState("");
	const [sentenceArray, setSentenceArray] = useState([]);
	const [scrambledSentence, setScrambledSentence] = useState("");

	//initiates loadGame function
	useEffect(() => {
		loadGame();
	}, []);

	//takes in words to scramble, maintains first and last letter, returns inside of the word scrambled
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

	//splits the sentence into word array, maintains words with 2- letters, sends other words to scrambled
	const scrambleSentence = (unscrambledSentence) => {
		const sentenceArr = unscrambledSentence.split(" ");
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

	//pull sentence from API, sets unscrambled sentence for the WordRow component, and calls scrambleSentence function
	const loadGame = () => {
		API.getSentence(window.apiCounter)
			.then((res) => {
				const unscrambledSentence1 = res.data.data.sentence;
				setUnscrambledSentence(unscrambledSentence1);
				scrambleSentence(unscrambledSentence1);
			})
			.catch((err) => console.log(err));
	};


	const handleEnter = ({ key }) => {
		console.log(key);
		if (key == 'Enter') {
			console.log('yes');
			apiCount();
		loadGame();
		}
	}
	//uses React history component to redirect to /outcome
	let history = useHistory();

	//when score hits 10, user is redirected to /outcome
	const calcScore = () => {
		console.log('in calcscore function');
		if (window.score >= 10) {
			history.push("/outcome");
		} else {
			window.score++;
			window.addEventListener("keydown", handleEnter);
		}
	};

	//keeps track of api counter
	const apiCount = () => {
		window.apiCounter++;
	};

	// const handleKeyUp = () => {};

	//when user completes a sentence, calcscore function is run
	const sentenceCompleted = () => {
		console.log('in sentence completed function');
		calcScore();
		
		// handleKeypress();
	
	};

	//increases api count to pull next sentence and calls loadgame function for new sentence
	const nextSentence = (event) => {
		event.preventDefault();
		apiCount();
		loadGame();
	};

	const keyCount = 0;

	
	// const handleKeypress = ({key}) => {
	// 	window.addEventListener('keydown', handleKeypress);
	// 	window.addEventListener("keyup", handleKeyUp);
	// 	console.log(key);
	// 		if (key.Code === 13) {
	// 			apiCount();
	// 			loadGame();
	// 		}
	// 	};
	

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
								// score={window.apiCounter}
								key={keyCount + 1}
								sentenceCompleted={sentenceCompleted}
								// calcScore={calcScore}
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
