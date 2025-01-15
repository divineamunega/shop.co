import styled, { css } from "styled-components";
import Logo from "./Logo";
import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import variables from "../styles/variables";
import { lgScreen, mdScreen, smScreen } from "../styles/mixins";

const StyledNavbar = styled.nav`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: var(--primary-font);
	padding: 2rem 1rem;
	gap: 3rem;

	${smScreen(css`
		padding: 2rem 2rem;
	`)}

	${lgScreen(css`
		padding: 2rem 4rem;
	`)}

	.nav_links {
		display: none;
		font-size: 1.4rem;
		gap: 0.3rem;
		font-weight: 500;
		align-items: center;
		justify-content: center;

		${mdScreen(css`
			display: flex;
		`)}
		& > li {
			padding: 1rem;
			transition: box-shadow;
			transition-duration: 1s;
			box-shadow: 0 0 0 4px rgba(${variables.primaryColor}, 0);
		}
		& > li:has(a:focus) {
			box-shadow: 0 0 0 4px rgba(${variables.primaryColor}, 0.7);
		}
		& a {
			color: black;
		}
	}

	.input {
		/* display: flex; */
		display: none;
		background-color: #f0f0f0;
		padding: 1rem;
		border-radius: 20px;
		flex: 1;
		gap: 1rem;
		align-items: center;
		box-shadow: 0 0 0 5px rgba(${variables.primaryColor}, 0);
		transition: box-shadow;
		transition-duration: 1s;

		${lgScreen(css`
			display: flex;
		`)}

		&:has(input:focus) {
			box-shadow: 0 0 0 5px rgba(${variables.primaryColor}, 0.4);
		}

		input {
			background-color: rgba(0, 0, 0, 0);
			border: none;
			outline: none;
			width: 100%;
			outline: none;
			border: none;
		}
	}

	.buttons {
		display: flex;
		/* gap: 0rem; */

		button {
			border: none;
			background-color: rgba(0, 0, 0, 0);
			box-shadow: 0 0 0 4px rgba(${variables.primaryColor}, 0);
			transition: box-shadow;
			transition-duration: 1s;
			padding: 1rem;

			&:focus {
				box-shadow: 0 0 0 4px rgba(${variables.primaryColor}, 0.7);
			}
		}

		.btn_search {
			display: block;
			${lgScreen(css`
				display: none;
			`)}
		}

		.btn_menu {
			display: block;

			${mdScreen(css`
				display: none;
			`)}
		}

		.btn_icon {
			transform: scale(1.3);

			${mdScreen(css`
				transform: scale(1);
			`)}
		}
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<Logo />
			<ul className="nav_links">
				<li>
					<Link to="shop">Shop</Link>
				</li>
				<li>
					<Link to="onsale">On Sale</Link>
				</li>
				<li>
					<Link to="newarrival">New Arrival</Link>
				</li>
				<li>
					<Link to="brand">Brands</Link>
				</li>
			</ul>

			<div className="input">
				<BiSearch size={20} />

				<input type="search" placeholder="Search for products..." />
			</div>

			<div className="buttons">
				<button className="btn_search">
					<BiSearch size={20} className="btn_icon" />
				</button>
				<button>
					<BiCart size={20} className="btn_icon" />
				</button>

				<button>
					<BiUser size={20} className="btn_icon" />
				</button>
				<button className="btn_menu">
					<BiMenu size={20} className="btn_icon" />
				</button>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
