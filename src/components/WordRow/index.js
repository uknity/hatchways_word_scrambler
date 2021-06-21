import React from "react";
import "./style.css";
// import { useState, useEffect } from "react";

function WordRow(props) {
	console.log(props);
	const sentArray = Object.values(props);
	console.log(sentArray);

	return (
		<div>
			{sentArray.map((word) => (
				<div className="row">
                    {word.split("").map((letter) => (
                        <div className="col" id="letterSpace">{letter}</div>
                    ))}
                    <div className="col" id="space"></div>
				</div>
			))}
		</div>
	);
}

export default WordRow;

