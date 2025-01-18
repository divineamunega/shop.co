import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHomepage = styled.main`
	& > .landing {
		background-color: var(--secondary-background-color);
	}
`;
const Homepage = () => {
	return (
		<StyledHomepage>
			<section className="landing">
				<div>
					<h1>Find Clothes that matches your style</h1>
					<p>
						Browse through our diverse range of meticulously crafted garments,
						designed to bring out your individuality and cater to your sense of
						style.
					</p>
					<Link to="/">Shop Now</Link>
					<div className="stats_box">
						<div className="stats_item">
							<div>200+</div>
							<div>International Brands</div>
						</div>
						<div className="stats_item">
							<div>2000+</div>
							<div>High Quality Products</div>
						</div>
						<div className="stats_item">
							<div>30,000+</div>
							<div>Happy Customers</div>
						</div>
					</div>
				</div>
				<div></div>
			</section>
		</StyledHomepage>
	);
};

export default Homepage;
