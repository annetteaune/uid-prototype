import Login from "./Login";

export default function ForStudents() {
	
	return (
		<>
			<section className="students-menu">
				<button>
					Tjenester <i className="fa-solid fa-chevron-down"></i>
				</button>
				<button>
					Studentliv <i className="fa-solid fa-chevron-down"></i>
				</button>
				<button>
					Eksamen <i className="fa-solid fa-chevron-down"></i>
				</button>
				<button>
					Utveksling <i className="fa-solid fa-chevron-down"></i>
				</button>
			</section>
			<span className="breadcrumb">
				Hjem <i className="fa-solid fa-chevron-right"> </i> For studenter
			</span>
			<div className="links-student-container">
				<section className="shortcuts">
					<h4>Snarveier</h4>
					<ul>
						<li>
							Book grupperom <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							Biblioteket <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							Kontakt IT-tjenesten <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							Ledige stillinger for studenter
							<i className="fa-solid fa-chevron-right"></i>
						</li>
					</ul>
				</section>
				<section className="profile">
					<Login />
				</section>
			</div>
		</>
	);
}
