import { Link } from "react-router-dom";

export default function Navibar() {
	return (
		<div id="navbar">
			<Link to="/">Home</Link>
			<Link to="/blue">Blue</Link>
			<Link to="/red">Red</Link>
			<Link to="/green">Green</Link>
		</div>
	);
}
