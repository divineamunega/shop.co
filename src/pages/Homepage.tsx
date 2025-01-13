import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../styles/variables";

const StyledHomepage = styled.main`
	& > .landing {
		font-family: var(--primary-font);
		background-color: var(--secondary-background-color);
		display: flex;
		padding: 2rem 2rem;
	}

	& > .landing > div:first-child {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	& .landing_heading {
		font-family: var(--secondary-font);
		font-weight: 700;
		font-size: 4rem;
	}

	& .landing_support {
		font-size: 1.7rem;
		color: rgba(${variables.primaryColor}, 0.6);
		line-height: 2.5rem;
	}

	& .landing_cta {
		background-color: var(--primary-color);
		color: var(--background-color);
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		border-radius: 60px;
		font-weight: 600;
	}

	& .stats_box {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	& .stats_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		flex-basis: 50%;

		&:nth-child(2) {
			border-left: 3px solid rgba(${variables.primaryColor}, 0.1);
		}
		& > div:nth-child(1) {
			font-size: 3rem;
			font-weight: 600;
		}

		& > div:nth-child(2) {
			font-size: 1.5rem;

			color: rgba(${variables.primaryColor}, 0.6);
		}
	}
`;
const Homepage = () => {
	return (
		<StyledHomepage>
			<section className="landing">
				<div>
					<h1 className="landing_heading">
						Find Clothes that matches your style
					</h1>
					<p className="landing_support">
						Browse through our diverse range of meticulously crafted garments,
						designed to bring out your individuality and cater to your sense of
						style.
					</p>
					<Link to="/" className="landing_cta">
						Shop Now
					</Link>
					<div className="stats_box">
						<div className="stats_item">
							<div>200+</div>
							<div>International Brands</div>
						</div>
						<div className="stats_item">
							<div>2,000+</div>
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
