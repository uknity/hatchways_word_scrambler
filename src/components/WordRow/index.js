import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function WordRow(props) {
	const sentArray = Object.values(props);
	const letterArray = sentArray.join(" ");
	console.log(letterArray);
	
	const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");	
	
	
	// const [sentenceString, setSentenceString] = useState([]);
	// const [word, setWord] = useState([]);
	// const [letterArray, setLetterArray] = useState([]);

	// useEffect(() => {
	// 	sentenceStringFunc();
	// }, []);
	// const wordArray = sentArray.split(" ");
	// console.log(wordArray);
const array = [
		{
			word: "",
			letters: 
				[{
					letter: "",
					id: ""
				}]
			
		}
	];

	const counter = 0;

	const addIds = () => {
		array.map((word) => {
			for (let i=0; i < word.length; i++) {
				word.letters[i].id = counter.toString;
			}
			
		
		
		})
	}
	

	const createLetterArray = () => {
		for (let i=0; i < array.length; i++) {
			const wordToSplit = array[i].word;
			console.log(wordToSplit);
			const letterAr = wordToSplit.split("");
			console.log(letterAr);
			array[i].letters = ({letters: letterAr})
			
		}
		addIds();
	}

	const createWordArray = () => {
		sentArray.map((word, index) => {
			if (index < sentArray.length -1 ) {
			var spacedWord = word + " ";
				array.push({word: spacedWord});

				
			} else {
				array.push({word: word});
			};

		})
		array.shift();
		createLetterArray();
	}

	createWordArray();
	console.log(array);

	// const wordsAndLettersObject = 
	// 	sentArray.forEach((word) => {
	// 	object.push({
	// 		'word': (word) + " ",
	// 		'letters': (word.split(""))
	// 	})
		
	// });
	// console.log(object);
	
	const wordObject = [
		{
			word: "chocolate",
			letters: [
				{
					letter: "c",
					id: 0
				},
				{
					letter: "h",
					id: 1
				},
				{
					letter: "o",
					id: 2
				},
				{
					letter: "c",
					id: 3
				},
				{
					letter: "o",
					id: 4
				},
				{
					letter: "l",
					id: 5
				},
				{
					letter: "a",
					id: 6
				},
				{
					letter: "t",
					id: 7
				},
				{
					letter: "e",
					id: 8
				},
				{
					letter: " ",
					id: 9
				},
				]
		},
		{
			word: "is",
			letters: [
				{
					letter: "i",
					id: 10
				},
				{
					letter: "s",
					id: 11
				},
				{
					letter: " ",
					id: 12
				}
			]

		},
		{
			word: "good",
			letters: [
				{
					letter: "g",
					id: 13
				},
				{
					letter: "o",
					id: 14
				},
				{
					letter: "o",
					id: 15
				},
				{
					letter: "d",
					id: 16
				},
			]
			
		}
	]
	console.log(wordObject);
	
	window.addEventListener("keydown", (event) => {
		setInputValue(event.key);
		// for ()
		// if (letter.key.valueOf === inputValue) {

		// }
	});

// 	const sentenceStringFunc = () => {
// 		const sentenceStringTemp = sentArray.join(" ");
// 		console.log(sentenceStringTemp);
// 		setSentenceString(sentenceStringTemp);

// };
// console.log(sentenceString);
// console.log(letterArray);
		
		
		// const stringLength = sentenceString.length;
		// console.log(stringLength);

		
		
		
		// sentenceString.split("").map((letter, index) => {
		// 	const letterKey = index;
		// 	if (letter === " ") {
		// 		const letterId = letterSpace;
		// 	}
		// 	sentenceString
		// 		.join("")
		// 		.split(" ")
		// 		.map((word) => {
		// 			setWord(word);
		// 		});
		// });

		// for (let i=0; i < stringLength; i++) {
		// 	numArray.push(i);
		// };

		// setKey(numArray);
	

	// console.log(key);

	return (
		<div>
			{/* {letterArray[] subs = letterArray.split(" ")} */}

			{/* {sentenceString.split("").map((letter, index) => {
			const letterKey = index;
			if (letter !== " ") {
				
			}
			const letterId = letterSpace;
			sentenceString
				.join("")
				.split(" ")
				.map((word) => {
					setWord(word);
				});
		})}; */}
			  {/* {sentArray.map((word, index) => (
				<div className="row" key={word.toString + index}>
					{word.split("").map((letter, index) => (
						<div
							className="col"
							id="letterSpace"
							// key={uuidv4()}
							key={`${sentArray.indexOf(word)}` + `${index}`}
						>
							
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
			))}   */}
		</div>
	);
}

export default WordRow;
