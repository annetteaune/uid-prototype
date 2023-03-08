import { useState } from "react";

export default function Login() {
	const [login, setLogin] = useState("Logg inn (Feide)");
	const handleLogin = () => {
		if (display == "none") {
			setDisplay("block");
		}
		setLogin("Hei, Student!");
	};

	const [display, setDisplay] = useState("none");
	return (
		<>
			<section>
				<h4>Dine studier</h4>
				<button className="login" onClick={handleLogin}>
					{login}
				</button>

				<ul style={{ display: display }}>
					<li>Timeplan</li>
					<li>Canvas</li>
					<li>Studentweb</li>
					<li>Inspera</li>
					<li>Ditt studieprogram</li>
					<li>Dine studieveiledere</li>
					<li>Dine foreninger</li>
				</ul>
			</section>
		</>
	);
}
