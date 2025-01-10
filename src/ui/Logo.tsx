import styled from "styled-components";

const StyledLogo = styled.div`
	font-family: "IntegralCF";
	font-weight: 900;
	color: black;
	font-size: 2.8rem;
	letter-spacing: 0.01px;
	text-transform: uppercase;
	/* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5); */
	&:focus {
	}
`;

const Logo = () => {
	return (
		<StyledLogo tabIndex={1}>
			<span>Shop.co</span>
		</StyledLogo>
	);
};

export default Logo;
