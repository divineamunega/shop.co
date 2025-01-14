import styled from "styled-components";
import Logo from "./Logo";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import variables from "../styles/variables";

const StyledNavbar = styled.nav`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 8rem;
	gap: 8rem;
	font-family: var(--primary-font);

	& > ul {
		display: flex;
		font-size: 1.6rem;
		gap: 1.7rem;
		font-weight: 500;

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
		background-color: #f0f0f0;
		padding: 1rem;
		border-radius: 20px;
		flex: 1;
		display: flex;
		gap: 1rem;
		align-items: center;
		box-shadow: 0 0 0 5px rgba(${variables.primaryColor}, 0);
		transition: box-shadow;
		transition-duration: 1s;

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
			&:focus {
			}
		}
	}

	.buttons {
		display: flex;
		gap: 1rem;

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
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<Logo />
			<ul>
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
				<button>
					<BiCart size={20} />
				</button>

				<button>
					<BiUser size={20} />
				</button>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
