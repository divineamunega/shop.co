import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderBanner = styled.div``;

const HeaderBanner = () => {
	return (
		<StyledHeaderBanner>
			Sign up and get 20% off yout first order.{" "}
			<Link to="sign-up">Sign up Now</Link>
		</StyledHeaderBanner>
	);
};

export default HeaderBanner;
