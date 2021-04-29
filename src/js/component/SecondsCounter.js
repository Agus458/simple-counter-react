import React, { useState, useEffect } from "react";
import Number from "./Number.js";

export default function SecondsCounter() {
	// const [counter, setCounter] = useState(0);

	// setInterval(() => {
	// 	setCounter(counter + 1);
	// });

	return (
		<div className="card bg-dark">
			<div className="card-body">
				<div className="row justify-content-between">
					<div className="col">Q</div>
					<div className="col">
						<Number number={9} />
					</div>
					<div className="col">
						<Number number={9} />
					</div>
					<div className="col">
						<Number number={9} />
					</div>
					<div className="col">
						<Number number={Math.floor(counter / 100)} />
					</div>
					<div className="col">
						<Number number={Math.floor(counter / 10)} />
					</div>
					<div className="col">
						<Number number={counter} />
					</div>
				</div>
			</div>
		</div>
	);
}
