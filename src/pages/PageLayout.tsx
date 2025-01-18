import styled from "styled-components";
import Navbar from "../ui/Navbar";
import HeaderBanner from "../ui/HeaderBanner";
import { Outlet } from "react-router-dom";

const StyledPageLayout = styled.div`
	height: fit-content;
`;

const PageLayout = () => {
	return (
		<StyledPageLayout>
			<header>
				<HeaderBanner />
				<Navbar />
			</header>

			<Outlet />

			{/* <footer>Hello I am a footer</footer> */}
		</StyledPageLayout>
	);
};

export default PageLayout;
