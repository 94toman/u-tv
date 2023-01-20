import Image from 'next/image';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import logo from '../../../images/utv_logo-white.png';
import { NavLink } from '../_Navbar/_NavLink/NavLink';
import styles from './Footer.module.scss';
// import socialFb from './socialIcons/fb.png';
// import socialIg from './socialIcons/ig.png';
import socialMail from './socialIcons/zavinac.png';

const Footer = () => {
	const router = useRouter();

	const deleteCookie = () => {
		destroyCookie(undefined, 'rcl_consent_given');
		destroyCookie(undefined, 'rcl_marketing_consent');
		destroyCookie(undefined, 'rcl_preferences_consent');
		destroyCookie(undefined, 'rcl_statistics_consent');
		router.reload();
		//document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.grid}>
				<div className={styles.logo}>
					<NavLink exact href="/">
						<Image alt="UTV_logo" src={logo} layout="intrinsic" width={117} height={102} />
					</NavLink>
				</div>
				{/* Kategorie jsou dočasně skryté, pouze SPORT */}
				{/* <div className={styles.kategorie}>
					<h3>Kategorie</h3>
					<NavLink exact href="/porady?kategorie=all">
						<p>Vše</p>
					</NavLink>
					<NavLink exact href="/porady?kategorie=current">
						<p>Aktuální</p>
					</NavLink>
					<NavLink exact href="/porady?kategorie=obsolete">
						<p>Archiv</p>
					</NavLink>
					<NavLink exact href="/porady?kategorie=zpravy">
						<p>Zprávy</p>
					</NavLink>
					<NavLink exact href="/porady?kategorie=dokumenty">
						<p>Dokumenty</p>
					</NavLink>
					<NavLink exact href="/porady?kategorie=sport">
						<p>Sport</p>
					</NavLink>
				</div> */}
				<div className={styles.oTelevizi}>
					<h3>O televizi</h3>
					<NavLink exact href="/porady">
						<p>Pořady</p>
					</NavLink>
					<NavLink exact href="/otelevizi">
						<p>O televizi</p>
					</NavLink>
					<NavLink exact href="/naladit">
						<p>Jak nás naladit</p>
					</NavLink>
					<NavLink exact href="media">
						<p>Pro média</p>
					</NavLink>
					<NavLink exact href="kontakt">
						<p>Kontakt</p>
					</NavLink>
				</div>
				<div className={styles.social}>
					{/* Facebook & Instagram hidden */}
					{/* <div className={styles.image}>
						<a href="https://facebook.com" target="_blank">
							<Image alt="Facebook" src={socialFb} layout="intrinsic" width={39} height={39} />
						</a>
					</div>
					<div className={styles.image}>
						<a href="https://instagram.com" target="_blank">
							<Image alt="Instagram" src={socialIg} layout="intrinsic" width={39} height={39} />
						</a>
					</div> */}
					<div className={styles.image}>
						<a href="mailto:test@test.com" target="_blank">
							<Image alt="Email" src={socialMail} layout="intrinsic" width={39} height={39} />
						</a>
					</div>
					<button className={styles.nastaveniCookies} onClick={() => deleteCookie()}>Upravit nastavení cookies</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
