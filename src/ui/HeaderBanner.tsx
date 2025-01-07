import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderBanner = styled.div`
	width: 100%;
	background-color: black;
	color: white;
	height: fit-content;
	font-size: 1.8rem;
	padding: 1.4rem 0rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	position: relative;
	top: 0;
	& a {
		color: white;
	}

	& button {
		position: absolute;
		right: 8rem;
		background-color: rgba(0, 0, 0, 0);
		color: white;
		font-size: 1.8rem;
		font-weight: 700;
		border: none;
	}
`;

const HeaderBanner = () => {
	return (
		<StyledHeaderBanner>
			<span>
				Sign up and get 20% off your first order.{" "}
				<Link to="sign-up">Sign up Now</Link>
			</span>
			<button>
				<span>X</span>
			</button>
		</StyledHeaderBanner>
	);
};

export default HeaderBanner;
