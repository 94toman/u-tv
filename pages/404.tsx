// 404

import Link from 'next/link';

const FourOhFour = () => {
	return (
		<>
			<h1>404 - Stránka nenalezena</h1>
			<Link href="/">
				<a>Zpět na úvodní stránku</a>
			</Link>
		</>
	);
};

export default FourOhFour;
