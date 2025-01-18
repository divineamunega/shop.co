import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/GlobalStyles";
import PageLayout from "./pages/PageLayout";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route path="/" element={<Homepage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
