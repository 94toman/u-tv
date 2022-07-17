import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Internetove, Kabelove, Pozemni, Satelitni } from '../components/Cards/NaladitCards';
import styles from './naladit.module.scss';
import { truncateString } from '../components/functions';
import htmlToFormattedText from 'html-to-formatted-text';

// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';

const NaladitPage = () => {
	const router = useRouter();
	const { prijem } = router.query;

	////////////////////////////////////////////////////////
	// BACKEND //

	// https://parse-dashboard.back4app.com/apps/96364f3f-4a37-483b-9bb4-9c4829102408/browser/naladit
	/////////////
	const [data, setData] = useState([{}]);

	// Your Parse initialization configuration goes here
	const PARSE_APPLICATION_ID = 'OQkorHAruiEbKfVdYVLvIDzYHcNjrqvcrAz1r0KW';
	const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
	const PARSE_JAVASCRIPT_KEY = 'trc9VN6FLaBVIM5t4W86tAy0ZFttHJ2Xyms3iF8T';
	Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
	Parse.serverURL = PARSE_HOST_URL;

	async function fetchData() {
		// create your Parse Query using the Person Class you've created
		const query = new Parse.Query('naladit');
		// use the equalTo filter to look for user which the name is John. this filter can be used in any data type
		//query.equalTo('druh', 'kabelove');
		// run the query
		const Pozemni = await query.find();
		//const pozemniText = await Pozemni.get('text');
		// access the Parse Object attributes
		console.log('query: ', query);
		console.log('Pozemni: ', Pozemni);
		console.log('0 text: ', Pozemni[0].get('text'));
		//console.log('person json: ', json);
		//console.log('Pozemni id: ', Pozemni.id);
		//console.log('Pozemni text: ', Pozemni.get('text'));
		setData(Pozemni);
	}

	/////////////////////////////////////////////////////

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

			{
				// Backend testing
			}
			<button onClick={fetchData}>Add Person</button>

			{/* ZOBRAZENI BACKEND DAT -> ALE FUNGUJE AZ PO STISKNUTI TLACITKA
			data.map((radek) => {
				return (
					<>
						<h3>{radek.get('druh')}</h3>
						<p>{htmlToFormattedText(radek.get('text'))}</p>
					</>
				);
			})
		}
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
			<div className={styles.contentWrapper}>
				<div className={styles.content}>{prijemContent()}</div>
			</div>
		</>
	);
};

export default NaladitPage;
