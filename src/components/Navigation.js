import { Link } from "react-router-dom";
import menuItems from "../menuItems"

export default function Navigation(){
    return (
			<>
				<nav>
					<ul>
						{menuItems.map((cat, index) => (
							<Link to={cat.url}>
								<li key={index}>{cat.title}</li>
							</Link>
						))}
					</ul>
				</nav>
			</>
		);
}