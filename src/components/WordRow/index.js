import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function WordRow(props) {
	const sentArray = Object.values(props);
	
	const [guessed, setGuessed] = useState(false);
	const [inputValue, setInputValue] = useState("");
    const [letter, setLetter] = useState("");

	window.addEventListener("keydown", event => {
        setInputValue(event.key);
        letterToGuess();
        }
    )

const letterToGuess = () => {
    sentArray.map((word, index) => {
        word.split("").map((letter, index) => {
            if (inputValue === letter) {
                console.log(letter);
                setGuessed(true);
            }
           
        })
    })
}

//     document.getElementByKey()
// const validate = (inputValue) => {
//     if (letter === inputValue) {
//         setGuessed(true);
//         console.log(guessed);
//     }
// }

	return (
		<div>
			{sentArray.map((word, index) => (
				<div className="row" key={word.toString + index}>
					{word.split("").map((letter, index) => (
						<div className="col" id="letterSpace" key={'letter' + index} >
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
			))}
			{/* <input type="text" onKeyDown={handleKeyDown}></input> */}
		</div>
	);
}

export default WordRow;
