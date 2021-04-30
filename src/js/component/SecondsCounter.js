import React, { useState, useEffect } from "react";
import Number from "./Number.js";

export default function SecondsCounter() {
	/*
    const [counter, setCounter] = useState(0);

    setTimeout(() => {
        setCounter(counter + 1);
    }
    */

	const [one, setOne] = useState(0);
	const [two, setTwo] = useState(0);
	const [tree, setTree] = useState(0);
	const [four, setFour] = useState(0);
	const [five, setFive] = useState(0);
	const [six, setSix] = useState(0);

	setTimeout(() => {
		if (one < 9) {
			setOne(one + 1);
		} else {
			setOne(0);
			if (two < 5) {
				setTwo(two + 1);
			} else {
				setTwo(0);
				if (tree < 9) {
					setTree(tree + 1);
				} else {
					setTree(0);
					if (four < 5) {
						setFour(four + 1);
					} else {
						setFour(0);
						if (five < 9) {
							setFive(five + 1);
						} else {
							setFive(0);
							setSix(six + 1);
						}
					}
				}
			}
		}
	}, 1000);

	return (
		<div className="card bg-dark">
			<div className="card-body">
				<div className="row justify-content-between">
					<div className="col text-light d-flex justify-content-center align-items-center">
						<i className="far fa-clock fa-3x"></i>
					</div>
					<div className="col">
						<Number
							number={six /* Math.floor(counter / 100000) % 10 */}
						/>
					</div>
					<div className="col">
						<Number
							number={five /* Math.floor(counter / 10000) % 10 */}
						/>
					</div>
					<div className="col">
						<Number
							number={four /* Math.floor(counter / 1000) % 10 */}
						/>
					</div>
					<div className="col">
						<Number
							number={tree /* Math.floor(counter / 100) % 10 */}
						/>
					</div>
					<div className="col">
						<Number
							number={two /* Math.floor(counter / 10) % 10 */}
						/>
					</div>
					<div className="col">
						<Number number={one /* counter % 10 */} />
					</div>
				</div>
			</div>
		</div>
	);
}
