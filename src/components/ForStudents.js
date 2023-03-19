import { useState } from "react";
import Login from "./Login";
import SubMenuStudents from "./SubMenuStudents";
import { subMenuItems } from "../subMenuItems";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

export default function ForStudents() {
	return (
		<>
			<section className="students-menu">
				<ul className="students-list">
					{subMenuItems.map((menu, index) => {
						return <MenuItems items={menu} key={index} />;
					})}
				</ul>
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
