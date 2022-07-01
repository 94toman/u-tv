import react, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './naladit.module.scss';
import { Pozemni, Kabelove, Satelitni, Internetove } from '../components/NaladitCards';

const NaladitPage = () => {
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

	const prijemContent = () => {
		switch (prijem) {
			case 'pozemni':
				return <Pozemni />;
			case 'kabelove':
				return <Kabelove />;
			case 'satelitni':
				return <Satelitni />;
			case 'internetove':
				return <Internetove />;

			default:
				return <Pozemni />;
		}
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
					<span className={styles.tabText}>Pozemní vysílání</span>
				</div>
				<div
					className={`${styles.tab} ${prijem === 'kabelove' ? styles.active : ''}`}
					onClick={() => tabClick('kabelove')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit12.png" width={71} height={69} />
					<span className={styles.tabText}>Kabelové vysílání</span>
				</div>
				<div
					className={`${styles.tab} ${prijem === 'satelitni' ? styles.active : ''}`}
					onClick={() => tabClick('satelitni')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit13.png" width={71} height={69} />
					<span className={styles.tabText}>Satelitní vysílání</span>
				</div>
				<div
					className={`${styles.tab} ${prijem === 'internetove' ? styles.active : ''}`}
					onClick={() => tabClick('internetove')}
				>
					<Image src="https://www.zaktv.cz/obrazky/naladit13.png" width={71} height={69} />
					<span className={styles.tabText}>Internetové vysílání</span>
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>{prijemContent()}</div>
			</div>

			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</>
	);
};

export default NaladitPage;
