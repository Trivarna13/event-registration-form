import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegForm from "./components/RegForm";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<RegForm />} />
			</Routes>
		</Router>
	);
}

export default App;
