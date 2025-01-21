import styled from "styled-components";
import variables from "../styles/variables";

const StyledLogo = styled.div`
	font-family: var(--secondary-font);
	font-weight: 700;
	color: black;
	font-size: 2.8rem;
	letter-spacing: 0.01px;
	text-transform: uppercase;
	box-shadow: 0 0 0 4px rgba(${variables.primaryColor}, 0);
	transition: box-shadow;
	transition-duration: 1s;
	padding: 1rem;
	display: flex;

	&:focus {
		box-shadow: 0 0 0 4px rgba(${variables.primaryColor}, 0.7);
	}
`;

type LogoPropType = {
	tabIndex?: number;
};

const Logo = ({ tabIndex }: LogoPropType) => {
	return (
		<StyledLogo tabIndex={tabIndex}>
			<span>Shop.co</span>
		</StyledLogo>
	);
};

export default Logo;
