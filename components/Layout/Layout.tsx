import Head from 'next/head';
import { ReactNode } from 'react';
import CookieConsent from 'react-cookie-consent';
import styles from './Layout.module.scss';
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
			<CookieConsent
				location="bottom"
				buttonText="Přijmout"
				declineButtonText="X"
				cookieName="myAwesomeCookieName2"
				style={{ background: '#2b373b', justifyContent: 'center' }}
				buttonStyle={{ color: '#231f20', background: '#ffca05', fontSize: '13px' }}
				declineButtonStyle={{ background: '#2b373b', fontSize: '8px' }}
				flipButtons={true}
				contentStyle={{ display: 'block', flex: '' }}
				enableDeclineButton
				onDecline={() => {
					alert('NEeeeee!');
				}}
				onAccept={() => {
					alert('Huráá!');
				}}
			>
				Tento web využívá Cookies pro Váš lepší zážitek.
				<span style={{ fontSize: '10px' }}> Lorem ipsum</span>
			</CookieConsent>
			<Footer />
		</div>
	);
};

export default Layout;
