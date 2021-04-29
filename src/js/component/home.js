import React from "react";
import SecondsCounter from "./SecondsCounter.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid mt-3">
			<SecondsCounter />
		</div>
	);
}
