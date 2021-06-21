import React from "react";
import "./style.css";
// import { useState, useEffect } from "react";

function WordRow(props) {
	console.log(props);
	const sentArray = Object.values(props);
	console.log(sentArray);

	return (
		<div>
			{sentArray.map((word, index) => (
				<div className="row">
					{word.split("").map((letter, index) => (
						<div className="col" id="letterSpace" key={index}>
							{letter}
						</div>
					))}

                    {index < sentArray.length - 1 ? <div className="col" id="space"></div> : <span></span>}
				</div>
			))}
		</div>
	);
}

export default WordRow;
