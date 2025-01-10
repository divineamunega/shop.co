import styled from "styled-components";

const StyledLogo = styled.div`
	font-family: "IntegralCF";
	font-weight: 900;
	color: black;
	font-size: 2.5rem;
	letter-spacing: 0.05px;
	text-transform: uppercase;
`;

const Logo = () => {
	return (
		<StyledLogo>
			<span>Shop.co</span>
		</StyledLogo>
	);
};

export default Logo;
