import Login from "./Login";

export default function Ansatte() {
	return (
		<>
			<section className="students-menu">
				<button>
					Tjenester <i className="fa-solid fa-chevron-down"></i>
				</button>
				<button>
					Timeplaner <i className="fa-solid fa-chevron-down"></i>
				</button>
				<button>
					Bibliotek <i className="fa-solid fa-chevron-down"></i>
				</button>
				<button>
					Organisering <i className="fa-solid fa-chevron-down"></i>
				</button>
			</section>
			<span className="breadcrumb">
				Hjem <i className="fa-solid fa-chevron-right"> </i> For ansatte
			</span>
			<div className="links-student-container">
				<section className="shortcuts">
					<h4>Snarveier</h4>
					<ul>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe
							<i className="fa-solid fa-chevron-right"></i>
						</li>
					</ul>
				</section>
				<section className="profile">
					<h4>Linker</h4>
					<ul>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe
							<i className="fa-solid fa-chevron-right"></i>
						</li>
					</ul>
				</section>
			</div>
		</>
	);
}
