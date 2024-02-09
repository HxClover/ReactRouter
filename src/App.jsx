import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";
import Green from "./components/Green";

function App() {
	return (
		<div id="container">
			<Navibar />
			<div id="main-section">
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/blue"
						element={<Blue />}
					/>
					<Route
						path="/red"
						element={<Red />}
					/>
					<Route
						path="/green"
						element={<Green />}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
