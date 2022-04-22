import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Traffic = () => {
	const [luz, setLuz] = useState("");

	return (
		<div>
			<div className="row bg-dark">
				<div className="col">
					<button
						className={
							luz == "rojo"
								? "btn btn-danger encendido"
								: "btn btn-danger"
						}
						onClick={() => {
							setLuz("rojo");
						}}>
						-
					</button>
				</div>
				<div className="col">
					<button
						className={
							luz == "amarillo"
								? "btn btn-warning encendido"
								: "btn btn-warning"
						}
						onClick={() => {
							setLuz("amarillo");
						}}>
						-
					</button>
				</div>
				<div className="col">
					<button
						className={
							luz == "verde"
								? "btn btn-success encendido"
								: "btn btn-success"
						}
						onClick={() => {
							setLuz("verde");
						}}>
						-
					</button>
				</div>
			</div>
		</div>
	);
};

export default Traffic;
