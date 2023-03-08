import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
	return (
		<>
			<Header />
			<Navigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
