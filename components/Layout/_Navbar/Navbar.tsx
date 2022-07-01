import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../images/utv_logo.png';
import styles from './Navbar.module.scss';
import { NavLink } from './_NavLink/NavLink';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
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
				<div className={styles.navContainer}>
					<div className={styles.navBarLogoWrapper}>
						<Link href="/">
							<Image alt="UTV_logo" src={logo} layout="responsive" />
						</Link>
					</div>
					{/* Displaying and hiding mobile menu */}
					<nav
						className={`${styles.menuNav} ${navbarOpen ? styles.showMobileMenu : ''}`}
						onClick={() => closeMenu()}
					>
						{/* Rest of the menu is the same for PC and mobile*/}
						<NavLink exact href="/" onClick={() => closeMenu()}>
							Home
						</NavLink>
						<NavLink exact={false} href="/porady" onClick={() => closeMenu()}>
							Pořady
						</NavLink>
						<NavLink exact href="/naladit" onClick={() => closeMenu()}>
							Jak naladit
						</NavLink>
						<NavLink exact href="/kontakt" onClick={() => closeMenu()}>
							Kontakt
						</NavLink>
					</nav>
				</div>

				{/* Visible only on mobile*/}
				<div className={styles.mobileNav}>
					<button onClick={handleToggle}>
						{navbarOpen ? (
							<MdClose style={{ color: '#222', width: '40px', height: '40px' }} />
						) : (
							<FiMenu style={{ color: '#222', width: '40px', height: '40px' }} />
						)}
					</button>
				</div>

				<div
					className={`${styles.coverAll} ${navbarOpen ? styles.showCoverAll : ''}`}
					onClick={() => closeMenu()}
				/>
			</header>
		</>
	);
};

export default Navbar;
