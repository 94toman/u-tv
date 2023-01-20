import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import CookieConsent from './_CookieConsent/CookieConsent';
import Footer from './_Footer/Footer';
import Navbar from './_Navbar/Navbar';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'UTV - regionální televize Ústeckého kraje' }: Props) => {
	return (
		<div className={styles.layout}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className={styles.allButFooter}>
				<Navbar />
				<div className={styles.container}>{children}</div>
			</div>
			<div>
				<CookieConsent />
			</div>

			<Footer />
		</div>
	);
};

export default Layout;