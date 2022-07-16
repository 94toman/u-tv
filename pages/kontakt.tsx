import Head from 'next/head';
import { useRouter } from 'next/router';
import KontaktCard from '../components/Cards/_Kontakt/KontaktCard';
import styles from './kontakt.module.scss';

const KontaktPage = () => {
	const router = useRouter();
	const { oddeleni } = router.query;

	// funkce, která mění konec URL
	const tabClick = (oddeleni) => {
		router.replace(
			{
				query: { ...router.query, oddeleni: oddeleni },
			},
			undefined,
			{ shallow: true }
		); // shallow: aby stránka zůstala kde je
	};

	const oddeleniContent = () => {
		switch (oddeleni) {
			case 'obchodni':
				return 'obchodni';
			case 'redakce':
				return 'redakce';
			case 'produkce':
				return 'produkce';
			case 'vedeni':
				return 'vedeni';

			default:
				return 'obchodni';
		}
	};

	const testDb = [
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/24.jpg',
			jmeno: 'Klára Tipanová',
			pozice: 'mediální konzultant pro Ústecký kraj',
			tel: '+420 603 123 123',
			email: 'klara.tipanova@utv.cz',
			oddeleni: 'obchodni',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/29.jpg',
			jmeno: 'Taťána Krchovová',
			pozice: 'reportérka a moderátorka',
			tel: '+420 603 123 321',
			email: 'tatanakrchovova@utv.cz',
			oddeleni: 'obchodni',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/24.jpg',
			jmeno: 'Klára Tipanová',
			pozice: 'mediální konzultant pro Ústecký kraj lorem',
			tel: '+420 603 123 123',
			email: 'klara.tipanova@utv.cz',
			oddeleni: 'obchodni',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/29.jpg',
			jmeno: 'Taťána Krchovová',
			pozice: 'reportérka a moderátorka',
			tel: '+420 603 123 321',
			email: 'tatanakrchovova@utv.cz',
			oddeleni: 'obchodni',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/24.jpg',
			jmeno: 'Klára Tipanová',
			pozice: 'mediální konzultant pro Ústecký kraj',
			tel: '+420 603 123 123',
			email: 'klara.tipanova@utv.cz',
			oddeleni: 'obchodni',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/29.jpg',
			jmeno: 'Taťána Krchovová',
			pozice: 'reportérka a moderátorka',
			tel: '+420 603 123 321',
			email: 'tatanakrchovova@utv.cz',
			oddeleni: 'obchodni',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/64.jpg',
			jmeno: 'Jonáš Novotný',
			pozice: 'redaktor',
			tel: '+420 603 123 123',
			email: 'redakce.redakce@utv.cz',
			oddeleni: 'redakce',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/41.jpg',
			jmeno: 'Taťána Produkce',
			pozice: 'produkce',
			tel: '+420 603 123 321',
			email: 'tatanakrchovova@utv.cz',
			oddeleni: 'produkce',
		},
		{
			foto: 'https://www.zaktv.cz/orez-280-280/lide/86.jpg',
			jmeno: 'Klára Vedení',
			pozice: 'vedoucí',
			tel: '+420 603 123 321',
			email: 'tatanakrchovova@utv.cz',
			oddeleni: 'vedeni',
		},
	];

	return (
		<>
			<Head>
				<title>Kontakt | UTV</title>
			</Head>
			<h2>Kontakt</h2>
			<div className={styles.row}>
				<div className={styles.tabulka}>
					<div className={styles.table}>
						<span className={styles.email}>info@utv.cz</span>
					</div>
					<div className={styles.table}>
						<p className={styles.cislo}>+420 371 650 138</p>

						<span className={styles.volejte}>(VOLEJTE V ČASE 8:00 - 16:30)</span>
					</div>
				</div>
				<div className={styles.adresa}>
					<b>
						ZAK TV s.r.o. <br />
						Prokopova 26 <br />
						301 00 Plzeň{' '}
					</b>
					<br />
					<br />
					IČ: 64835669 <br />
					DIČ: CZ64835669
				</div>
			</div>

			{/* Přepínání karet */}
			<div className={styles.wrapper}>
				<div
					className={`${styles.tab} ${
						oddeleni === 'obchodni' || oddeleni === undefined ? styles.active : ''
					}`}
					onClick={() => tabClick('obchodni')}
				>
					<span className={styles.tabText}>Obchodní oddělení</span>
				</div>
				<div
					className={`${styles.tab} ${oddeleni === 'redakce' ? styles.active : ''}`}
					onClick={() => tabClick('redakce')}
				>
					<span className={styles.tabText}>Redakce</span>
				</div>
				<div
					className={`${styles.tab} ${oddeleni === 'produkce' ? styles.active : ''}`}
					onClick={() => tabClick('produkce')}
				>
					<span className={styles.tabText}>Produkce</span>
				</div>
				<div
					className={`${styles.tab} ${oddeleni === 'vedeni' ? styles.active : ''}`}
					onClick={() => tabClick('vedeni')}
				>
					<span className={styles.tabText}>Vedení společnosti</span>
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					{testDb
						.filter((osoby) => {
							return osoby.oddeleni === oddeleniContent();
						})
						.map((osoba) => {
							return <KontaktCard osoba={osoba} />;
						})}
				</div>
			</div>
			<div className={styles.detaily}>
				<hr className={styles.solidDivider} />
				<div className={styles.text}>
					<p>
						Společnost je zapsaná v obchodním rejstříku vedeném u Krajského soudu v Plzni, oddíl C, vložka
						č. 7726. <br />
						Bankovní účet: 117005163/0300; fakturační adresa: fakturace@zaktv.cz <br />
						Orgánem dohledu nad provozováním televizního vysílání je Rada pro rozhlasové a televizní
						vysílání.
					</p>
					<p>
						V roce 2020 došlo ke změně v majetkové struktuře Zak TV, jejíž většinovým vlastníkem je EURONOVA
						GROUP. <br />V lednu tohoto roku došlo k fůzi společnosti West Bohemia Broadcasting (obchodní
						zastoupení) se společností Zak TV.
					</p>
				</div>
			</div>
		</>
	);
};

export default KontaktPage;

/*
				<table>
					<tr>info@utv.cz</tr>
					<tr>+420 371 650 138</tr>
				</table>
*/
