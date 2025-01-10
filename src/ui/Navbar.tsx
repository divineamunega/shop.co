import styled from "styled-components";
import Logo from "./Logo";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";

const StyledNavbar = styled.nav`
	background-color: white;
	display: flex;
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<Logo />
			<ul>
				<li>Shop</li>
				<li>On sale</li>
				<li>New Arrivals</li>
				<li>Brands</li>
			</ul>

			<input type="search" />

			<div>
				<button>
					<BiSearch />
				</button>

				<button>
					<BiCart />
				</button>

				<button>
					<BiUser />
				</button>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
