import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "../ui/Navbar";
import HeaderBanner from "../ui/HeaderBanner";

const StyledPageLayout = styled.div`
	height: fit-content;
`;

type PageLayoutPropType = {
	children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutPropType) => {
	return (
		<StyledPageLayout>
			<header>
				<HeaderBanner />
				<Navbar />
			</header>

			<main>{children}</main>

			{/* <footer>Hello I am a footer</footer> */}
		</StyledPageLayout>
	);
};

export default PageLayout;
