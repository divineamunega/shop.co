import { AnimatePresence } from "motion/react";
import styled from "styled-components";
import { motion } from "motion/react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const StyledSideBar = styled(motion.div)`
	position: fixed;
	z-index: 1;
	width: 100vw;
	height: 100dvh;
	left: 0;
	top: 0;

	.drawer {
		width: 35rem;
		background-color: var(--background-color);
		position: absolute;
		top: 0;
		right: -100%;
		height: 100%;
		padding: 2rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	& .nav_links {
		font-size: 2rem;
		gap: 2rem;
		display: flex;
		flex-direction: column;
		& a {
			color: var(--primary-color);
			width: 100%;
			height: 100%;
			padding: 1.5rem 1rem;
			border: 4px solid var(--background-color);
			transition: border;
			transition-duration: 0.5s;

			&:focus {
				transition-duration: 0.5s;
				border: 4px solid var(--primary-color);
			}
		}
		& > li {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

type SidebarPropTypes = {
	toggleSideIsOpen: (close?: string) => void;
	sideIsOpen: boolean;
};

const Sidebar = ({ toggleSideIsOpen, sideIsOpen }: SidebarPropTypes) => {
	useEffect(() => {
		const handleKeyDown = function (e: KeyboardEvent) {
			if (e.key === "Escape") {
				toggleSideIsOpen("close");
			}
		};

		if (sideIsOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [toggleSideIsOpen, sideIsOpen]);
	return (
		<AnimatePresence>
			{sideIsOpen && (
				<StyledSideBar
					onClick={() => toggleSideIsOpen()}
					animate={{
						backdropFilter: "blur(3px)",
						backgroundColor: "rgba(0,0,0,0.3)",
					}}
					exit={{
						backdropFilter: "blur(0px)",

						backgroundColor: "rgba(0,0,0,0)",
					}}
					transition={{ duration: 1, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
				>
					<motion.div
						className="drawer"
						initial={{ right: "-100%" }}
						animate={{ right: "0" }}
						transition={{
							duration: 1,
							delay: 0,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						exit={{ right: "-100%" }}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<Logo tabIndex={undefined} />
						<ul className="nav_links">
							<li>
								<Link to="/hello">Shop</Link>
							</li>
							<li>
								<Link to="/hello">On Sale</Link>
							</li>
							<li>
								<Link to="/hello">New Arrival</Link>
							</li>
							<li>
								<Link to="/hello">Brands</Link>
							</li>
						</ul>
					</motion.div>
				</StyledSideBar>
			)}
		</AnimatePresence>
	);
};

export default Sidebar;
