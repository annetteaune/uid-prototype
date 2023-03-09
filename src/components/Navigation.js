import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Navigation() {
	//state for å gjemme/vise dropdown
	const [display, setDisplay] = useState("none");

	const handleDropdown = () => {
		if (display == "none") {
			setDisplay("block");
		} else {
			setDisplay("none");
		}
	};

	// sende riktig verdi og innhold til dropdown
	const [content, setContent] = useState([]);

	console.log(content);

	return (
		<>
			<nav className="navbar">
				<ul>
					<li>Forsiden</li>
					<li
						onClick={() => {
							handleDropdown();

							setContent([
								"Studieretninger",
								"Livet rundt studiene",
								"Søknad og opptak",
								"Utveksling",
								"Videre utdanning",
								"Tilrettelegging",
							]);
						}}
					>
						Studier
					</li>
					<li
						onClick={() => {
							handleDropdown();

							setContent([
								"Alt om forskning ved HiOF",
								"Forskningssatsinger",
								"Forskningsgrupper",
								"Forskningsprosjekter",
							]);
						}}
					>
						Forskning
					</li>
					<li
						onClick={() => {
							handleDropdown();

							setContent([
								"Kontakt oss",
								"Organisasjon",
								"Samarbeid",
								"Utvikling, strategi og visjon",
								"Regelverk",
							]);
						}}
					>
						Om HIOF
					</li>
					<Link to="/for-ansatte">
						<li className="nav-link">For Ansatte</li>
					</Link>
					<Link to="/for-studenter">
						<li className="nav-link">For Studenter</li>
					</Link>
				</ul>
				<div style={{ display: display }} className="dropdowncontainer">
					<Dropdown content={content} />
				</div>
			</nav>
		</>
	);
}
