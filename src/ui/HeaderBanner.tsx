import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { lgScreen } from "../styles/mixins";

const StyledHeaderBanner = styled(motion.div)`
	width: 100%;
	background-color: black;
	color: white;
	height: fit-content;
	font-size: 1.4rem;
	padding: 1.4rem 0rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	position: relative;
	font-family: var(--primary-font);
	top: 0;
	& a {
		color: white;
		text-decoration: underline;
	}

	button {
		position: absolute;
		right: 2rem;
		background-color: rgba(0, 0, 0, 0);
		color: white;
		font-size: 1.8rem;
		font-weight: 700;
		border: none;
		cursor: pointer;

		${lgScreen(css`
			padding: 2rem 4rem;
		`)}
	}
`;

const HeaderBanner = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<AnimatePresence>
			{isOpen ? (
				<StyledHeaderBanner
					exit={{
						y: "-100%",
					}}
					transition={{
						duration: "0.3",
					}}
				>
					<span>
						Sign up and get 20% off your first order.{" "}
						<Link to="sign-up">Sign up Now</Link>
					</span>
					<button
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<span>X</span>
					</button>
				</StyledHeaderBanner>
			) : null}
		</AnimatePresence>
	);
};

export default HeaderBanner;
