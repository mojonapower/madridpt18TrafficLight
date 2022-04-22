import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// Con 3 variables de estado
	const [rojo, setRojo] = useState("");
	const [verde, setVerde] = useState("");
	const [amarillo, setAmarillo] = useState("");

	return (
		<div>
			<div className="row bg-dark">
				<div className="col">
					<button
						className={
							verde == "encendido"
								? "btn bg-success encendido "
								: "btn bg-success "
						}
						onClick={() => {
							setVerde("encendido");
							setAmarillo("");
							setRojo("");
						}}>
						-
					</button>
				</div>
				<div className="col">
					<button
						className={
							amarillo == "encendido"
								? "btn bg-warning encendido "
								: "btn bg-warning "
						}
						onClick={() => {
							setAmarillo("encendido");
							setVerde("");
							setRojo("");
						}}>
						-
					</button>
				</div>
				<div className="col">
					<button
						className={
							rojo == "encendido"
								? "btn bg-danger encendido "
								: "btn bg-danger "
						}
						onClick={() => {
							setRojo("encendido");
							setVerde("");
							setAmarillo("");
						}}>
						-
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
