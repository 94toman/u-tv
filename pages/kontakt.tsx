import Head from 'next/head';
import { useRouter } from 'next/router';
import KontaktCard from '../components/Cards/_Kontakt/KontaktCard';
import { fetcher } from '../components/functions';
import styles from './kontakt.module.scss';

type IKontakty = {
	kontakty: {
		id: number; //"85",
		lastchange: number; //"1633527191","
		status: string; //"visible",
		fullname: string; //"Mgr. Bohumil Koča",
		department: string; //"Obchodní oddělení",
		jobtitle: string; //"obchodní ředitel"
		phone: string; //"+420371650138",
		email: string; //"obchod@zaktv.cz",
		description: string; //"",
		photo: string; //"https://www.zaktv.cz/lide/85.jpg?1633527191"
	}[];
};

const KontaktPage = ({ kontakty }: IKontakty) => {
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
			case 'Obchodní oddělení':
				return 'Obchodní oddělení';
			case 'Redakce':
				return 'Redakce';
			case 'Produkce':
				return 'Produkce';
			case 'Vedení společnosti':
				return 'Vedení společnosti';

			default:
				return 'Obchodní oddělení';
		}
	};

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
						oddeleni === 'Obchodní oddělení' || oddeleni === undefined ? styles.active : ''
					}`}
					onClick={() => tabClick('Obchodní oddělení')}
				>
					<span className={styles.tabText}>Obchodní oddělení</span>
				</div>
				<div
					className={`${styles.tab} ${oddeleni === 'Redakce' ? styles.active : ''}`}
					onClick={() => tabClick('Redakce')}
				>
					<span className={styles.tabText}>Redakce</span>
				</div>
				<div
					className={`${styles.tab} ${oddeleni === 'Produkce' ? styles.active : ''}`}
					onClick={() => tabClick('Produkce')}
				>
					<span className={styles.tabText}>Produkce</span>
				</div>
				<div
					className={`${styles.tab} ${oddeleni === 'Vedení společnosti' ? styles.active : ''}`}
					onClick={() => tabClick('Vedení společnosti')}
				>
					<span className={styles.tabText}>Vedení společnosti</span>
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					{kontakty
						.filter((osoby) => {
							return osoby.department === oddeleniContent();
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

export async function getStaticProps() {
	let data = {
		contacts: {},
	};

	try {
		data = await fetcher(`contacts.json`);
	} catch (e) {
		console.log(e);
	}

	return {
		props: {
			kontakty: data.contacts,
		}, // will be passed to the page component as props
		revalidate: 86400,
	};
}
