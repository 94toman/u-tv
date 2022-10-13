import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Nejnovejsi from '../components/Cards/_Nejnovejsi/Nejnovejsi';
// import Tip from '../components/Home/_Tip/Tip';
// import Nejsledovanejsi from '../components/Cards/_Nejsledovanejsi/Nejsledovanejsi';
import { fetcher } from '../components/functions';
import { NavLink } from '../components/Layout/_Navbar/_NavLink/NavLink';
import pravcickaBrana from '../images/pravcickaBrana.png';
import prostorProReklamu from '../images/prostor-pro-reklamu.png';
import logo from '../images/utv_logo-white.png';
import styles from './index.module.scss';

const IndexPage = ({ mainPageData, nejnovejsi, nejsledovanejsi }) => {
	// https://www.figma.com/file/Gyf7KGAHIjsoz16cQxpDBG/UTV-draft?node-id=0%3A1

	return (
		<>
			<Head>
				<title>Domů | UTV</title>
			</Head>

			<div className={styles.heading}>
				<div className={styles.image}>
					<Image
						src={pravcickaBrana}
						layout="responsive"
						objectFit="cover"
						width={992}
						height={476}
						alt="pravcicka-brana"
					/>
				</div>
				<div className={styles.overlay}>
					<Image alt="UTV_logo" src={logo} layout="intrinsic" width={117} height={102} />
					<div className={styles.lead}>
						<ReactMarkdown>
							{
								mainPageData.find((radek) => {
									return radek.nazev === 'first-line';
								}).text
							}
						</ReactMarkdown>
						<NavLink exact href="https://www.televizeutv.cz" target="_blank">
							Živé vysílání
						</NavLink>

						{/* TEMP - velký text skrytý */}
						{/* <ReactMarkdown>
							{
								mainPageData.find((radek) => {
									return radek.nazev === 'second-line';
								}).text
							}
						</ReactMarkdown> */}
					</div>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.nejnovejsi}>
					<h3>Nejnovější epizody</h3>
					{nejnovejsi.videos.map((epizoda) => {
						return <Nejnovejsi epizoda={epizoda} />;
					})}
				</div>

				<div className={styles.reklama}>
					<Image
						src={prostorProReklamu}
						layout="responsive"
						objectFit="cover"
						width={1190}
						height={396}
						alt="pravcicka-brana"
					/>
				</div>

				{/* TIP a Nesledovanější pořady - dočasně skryté */}
				{/* <Tip
					title={nejsledovanejsi[0].title}
					description={nejsledovanejsi[0].description}
					logo={nejsledovanejsi[0].logo}
					id={nejsledovanejsi[0].id}
				/>

				<div className={styles.nejsledovanejsi}>
					<h3>Nejsledovanější pořady</h3>
					{nejsledovanejsi.map((porad) => {
						return <Nejsledovanejsi porad={porad} />;
					})}
				</div> */}
			</div>
		</>
	);
};

export default IndexPage;

export async function getStaticProps() {
	const nejnovejsi = await fetcher(`videos.json?limit=3`);
	// Get first 3 episodes

	const porady = await fetcher(`programmes.json`);

	const nejsledovanejsi = await porady.programmes
		.sort((a, b) => {
			return b.playcount - a.playcount;
		})
		.slice(0, 3);

	const fallback = {
		data: [
			{
				nazev: 'first-line',
				text: '## REGIONÁLNÍ TELEVIZE\n ## ÚSTECKÉHO KRAJE',
			},
			{
				nazev: 'second-line',
				text: '',
			},
		],
	};

	try {
		const res = await fetch('https://utv-backend.herokuapp.com/api/mainpages');
		const obj = await res.json();
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
				mainPageData: flat,
				nejnovejsi: nejnovejsi,
				nejsledovanejsi: nejsledovanejsi,
			}, // will be passed to the page component as props
			revalidate: 60,
		};
	} catch (e) {
		return {
			props: {
				mainPageData: fallback.data, //error handling in case of Fetch error
				nejnovejsi: nejnovejsi,
				nejsledovanejsi: nejsledovanejsi,
			},
			revalidate: 60,
		};
	}
}
