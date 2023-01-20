// 404

import { NavLink } from '../components/Layout/_Navbar/_NavLink/NavLink';

const FourOhFour = () => {
	return (
		<>
			<h1>404 - Stránka nenalezena</h1>
			<NavLink exact href="/">
				<a>Zpět na úvodní stránku</a>
			</NavLink>
		</>
	);
};

export default FourOhFour;
