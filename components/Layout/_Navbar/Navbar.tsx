import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../images/utv_logo-white.png';
import styles from './Navbar.module.scss';
import { NavLink } from './_NavLink/NavLink';

import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
	// Functions to control mobile menu
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<>
			<header className={styles.header}>
				{/* Black space left from menu */}
				<div className={styles.blackBar}>
					<div className={styles.logoWrapper}>
						<Link href="/">
							<Image alt="UTV_logo" src={logo} layout="intrinsic" width={69} height={56} />
						</Link>
					</div>
				</div>

				<div className={styles.navContainer}>
					{/* Displaying and hiding mobile menu */}
					<nav
						className={`${styles.menuNav} ${navbarOpen ? styles.showMobileMenu : ''}`}
						onClick={() => closeMenu()}
					>
						{/* Rest of the menu is the same for PC and mobile*/}
						<NavLink exact href="/" onClick={() => closeMenu()}>
							Domů
						</NavLink>
						<NavLink exact={false} href="/porady" onClick={() => closeMenu()}>
							Pořady
						</NavLink>
						<NavLink exact href="/media" onClick={() => closeMenu()}>
							Pro média
						</NavLink>
						<NavLink exact href="/naladit" onClick={() => closeMenu()}>
							Jak naladit
						</NavLink>
						<NavLink exact href="/kontakt" onClick={() => closeMenu()}>
							Kontakt
						</NavLink>
					</nav>
				</div>

				{/* Hamburger menu -> Visible only on mobile*/}
				<div className={styles.mobileNav}>
					<button onClick={handleToggle}>
						{navbarOpen ? (
							<MdClose style={{ color: '#222', width: '40px', height: '40px' }} />
						) : (
							<FiMenu style={{ color: '#222', width: '40px', height: '40px' }} />
						)}
					</button>
				</div>

				{/* Div covering whole page to close mobile menu on click away*/}
				<div
					className={`${styles.coverAll} ${navbarOpen ? styles.showCoverAll : ''}`}
					onClick={() => closeMenu()}
				/>
			</header>
		</>
	);
};

export default Navbar;
