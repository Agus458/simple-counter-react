import React from "react";
import PropTypes from "prop-types";

export default function Number(props) {
	return (
		<div className="card bg-dark text-light border-light">
			<div className="card-body text-center">
				<h5 className="card-title m-0">{props.number}</h5>
			</div>
		</div>
	);
}

Number.propTypes = {
	number: PropTypes.number
};
