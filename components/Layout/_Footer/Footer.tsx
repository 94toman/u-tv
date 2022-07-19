import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { resetCookieConsentValue } from 'react-cookie-consent';
import logo from '../../../images/utv_logo-white.png';
import styles from './Footer.module.scss';
import socialFb from './socialIcons/fb.png';
import socialIg from './socialIcons/ig.png';
import socialMail from './socialIcons/mail.png';

const Footer = () => {
	const router = useRouter();

	return (
		<footer className={styles.footer}>
			<div className={styles.grid}>
				<div className={styles.logo}>
					<Link href="/">
						<Image alt="UTV_logo" src={logo} layout="intrinsic" width={117} height={102} />
					</Link>
				</div>
				<div className={styles.kategorie}>
					<h3>Kategorie</h3>
					<p>Zprávy</p>
					<p>Krimi</p>
					<p>Cestování</p>
					<p>Humor</p>
					<p>Zprávy</p>
					<p>Cestování</p>
				</div>
				<div className={styles.oTelevizi}>
					<h3>O televizi</h3>
					<p>Aktuální vysílání</p>
					<p>Pořady</p>
					<p>O televizi</p>
					<p>Jak nás naladit</p>
					<p>Reklama</p>
					<p>Kontakt</p>
				</div>
				<div className={styles.social}>
					<div className={styles.image}>
						<a href="https://facebook.com" target="_blank">
							<Image alt="Facebook" src={socialFb} layout="intrinsic" width={39} height={39} />
						</a>
					</div>
					<div className={styles.image}>
						<a href="https://instagram.com" target="_blank">
							<Image alt="Instagram" src={socialIg} layout="intrinsic" width={39} height={39} />
						</a>
					</div>
					<div className={styles.image}>
						<a href="mailto:test@test.com" target="_blank">
							<Image alt="Email" src={socialMail} layout="intrinsic" width={39} height={39} />
						</a>
					</div>
					<button onClick={() => resetCookieConsentValue('myAwesomeCookieName2')} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
