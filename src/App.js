import "./css/main.css";
import "../src/App.css"
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ForStudents from "./components/ForStudents";
import Ansatte from "./components/Ansatte";
import Dummypage from "./components/Dummypage";
import ContactPage from "./components/ContactPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="/for-studenter" element={<ForStudents />} />
				<Route path="/for-ansatte" element={<Ansatte />} />
				<Route path="/dummypage" element={<Dummypage />} />
				<Route path="/kontakt-oss" element={<ContactPage/>} />
			</Route>
		</Routes>
	);
}

export default App;
