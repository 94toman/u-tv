import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import styles from './naladit.module.scss';

const NaladitPage = ({ naladitData }) => {
	const router = useRouter();
	const { prijem } = router.query;

	// funkce, která mění konec URL
	const tabClick = (druh) => {
		router.replace(
			{
				query: { ...router.query, prijem: druh },
			},
			undefined,
			{ shallow: true }
		); // shallow: aby stránka zůstala kde je
	};

	return (
		<>
			<Head>
				<title>Jak nás naladit | UTV</title>
			</Head>
			<h2>Jak nás naladit</h2>

			{/* Přepínání karet */}
			<div className={styles.wrapper}>
				<div
					className={`${styles.tab} ${prijem === 'pozemni' || prijem === undefined ? styles.active : ''}`}
					onClick={() => tabClick('pozemni')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit11.png" width={71} height={69} />

					<span className={styles.tabText}>
						Pozemní <br className={styles.mobile_break} />
						vysílání
					</span>
				</div>
				<div
					className={`${styles.tab} ${prijem === 'kabelove' ? styles.active : ''}`}
					onClick={() => tabClick('kabelove')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit12.png" width={71} height={69} />

					<span className={styles.tabText}>
						Kabelové <br className={styles.mobile_break} /> vysílání
					</span>
				</div>
				<div
					className={`${styles.tab} ${prijem === 'satelitni' ? styles.active : ''}`}
					onClick={() => tabClick('satelitni')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit13.png" width={71} height={69} />

					<span className={styles.tabText}>
						Satelitní <br className={styles.mobile_break} />
						vysílání
					</span>
				</div>
				<div
					className={`${styles.tab} ${prijem === 'internetove' ? styles.active : ''}`}
					onClick={() => tabClick('internetove')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit13.png" width={71} height={69} />

					<span className={styles.tabText}>
						Internetové <br className={styles.mobile_break} />
						vysílání
					</span>
				</div>
			</div>

			{/* Popis jednotlivých připojení */}
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<ReactMarkdown className={styles.markdown}>
						{!prijem
							? // defaultní druh připojení
							  naladitData.find((naladit) => {
									return naladit.druh === 'pozemni';
							  }).popis
							: // když je nastavené query v URL
							  naladitData.find((naladit) => {
									return naladit.druh === prijem;
							  }).popis}
					</ReactMarkdown>
				</div>
			</div>
		</>
	);
};

export default NaladitPage;

export async function getStaticProps() {
	const fallback = {
		data: [
			{
				druh: 'kabelove',
				popis: 'UTV je dostupné u vybraných poskytovatelů kabelového signálu nejen v západních Čechách, ale v celé ČR.\n\nVysíláme např. u poskytovatelů:\n\n- Sledovani.tv\n- Starnet TV\n- Lepsi.tv\n- 4NET.TV\n- Pilsfree TV\n- ZKTV\n- Kabel Ostrov\n- Nika TV\n- Rio Media a další.',
			},
			{
				druh: 'satelitni',
				popis: 'TV ZAK v současné době není dostupná v satelitním vysílání. Diváci, kteří využívají satelitní vysílání, si mohou vysílání pustit přes online vysílání nebo v archivu.',
			},
			{
				druh: 'internetove',
				popis: 'UTV má propracovaný video archiv, ve kterém je možné si pustit všechny naše pořady zpětně. Stačí zadat hledaný pořad, uvést ve vyhledávači hosta či jiné klíčové slovo a systém vám nabídne nalezené pořady.\n\nCelé naše aktuální vysílání je možné si zpětně pustit v odkazu Online vysílání.',
			},
			{
				druh: 'pozemni',
				popis: 'Naše vysílání mohou sledovat všichni obyvatelé Ústeckého kraje, kteří přijímají signál z běžné televizní antény. Terestrické pokrytí nám zajišťuje společnost Digital Broadcasting. V roce 2020 v ČR změna vysílacího standardu na DVB-T2.\n\nV případě, že jste obyvatelem domu, kde je společná anténa, je potřeba zjistit, zdali vám již byl naladěn multiplex 24. To zjistíte tak, že přijímáte např. kanály NOVA, NOVA FUN, NOVA GOLD, RELAX, apod. V případě že ano, můžete si na vašem přijímači naladit vysílání i TV ZAK (viz návod níže). V případě, že výše uvedené kanály nechytáte přes společnou anténu, je potřeba vyhledat pomoc správce vaší antény a požádat ho o naladění multiplexu 24.\n\nStručný návod, jak naladit TV ZAK na set-top boxu:\n\n- Zapněte si televizi, popř. i externí set-top box.\n- Na ovladači zmáčkněte tlačítko menu.\n- V menu pomoci šipek na ovladači najeďte na automatické ladění (nebo také vyhledávání či skenování).\n- Zmáčkněte OK nebo potvrdit.\n- Projeďte všechny naladěné kanály.\n- Nyní byste měli mít přidaný kanál TV ZAK.',
			},
		],
	};

	try {
		const res = await fetch('https://utv-backend.herokuapp.com/api/naladits');
		let obj = await res.json();
		if (obj.data === null) {
			obj = fallback;
		}
		const flat = obj.data.map((druh) => {
			return Object.assign(
				{},
				...(function _flatten(o) {
					return [].concat(
						...Object.keys(o).map((k) => (typeof o[k] === 'object' ? _flatten(o[k]) : { [k]: o[k] }))
					);
				})(druh)
			);
		});

		return {
			props: {
				naladitData: flat,
			}, // will be passed to the page component as props
		};
	} catch (e) {
		return {
			props: {
				naladitData: fallback.data, //error handling in case of Fetch error
			},
		};
	}
}
