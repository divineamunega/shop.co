import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/GlobalStyles";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
