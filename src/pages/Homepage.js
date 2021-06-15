import React from "react";
import { useState, useEffect } from "react";
import API from "../utils/API";

const Homepage = () => {
	const [counter, setCounter] = useState();
    const [displaySentence, setDisplaySentence] = useState("");

	useEffect(() => {
		loadGame();
	});

    
	const loadGame = () => {
        const sentenceNum = 1;
		console.log("you are in loadgame function");
		setCounter(sentenceNum);
        console.log(counter);
        API.getSentence(counter)
        .then(res => {
            setDisplaySentence(res.data.data.sentence);
            // const displaySentence = res.data.data.sentence;
            // console.log(displaySentence);
        })
        .catch(err => console.log(err));
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
