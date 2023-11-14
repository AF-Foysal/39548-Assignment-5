import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FetchAbdullah from "./apis/F_API_Abdullah";
import JoshAPI from "./apis/joshAPI";
import AzmainAPI from "./apis/azmainAPI";
import FetchThanemul from "./apis/thanemulAPI";

function App() {
	return (
		<>
			<nav>
				<ul>
					<Link to='/'>Home</Link>
				</ul>
				<ul>
					<Link to='/abdullah'>Abdullah's API</Link>
				</ul>
				<ul>
					<Link to='/josh'>Josh's API</Link>
				</ul>
				<ul>
					<Link to='/azmain'>Azmain's API</Link>
				</ul>
        <ul>
					<Link to='/thanemul'>Thanemul's API</Link>
				</ul>
			</nav>
			<Routes>
				<Route path='/abdullah' element={<FetchAbdullah />} />
				<Route path='/josh' element={<JoshAPI />} />
				<Route path='/azmain' element={<AzmainAPI />} />
        <Route path='/thanemul' element={<FetchThanemul />} />
			</Routes>
		</>
	);
}

export default App;
