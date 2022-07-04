// porady/index

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Porad from '../../../components/_Cards/Porad';
import GoBack from '../../../components/_GoBack/GoBack';
import { useState } from 'react';
import htmlToFormattedText from 'html-to-formatted-text';
import Epizoda from '../../../components/_Cards/Epizoda';
import Heading from '../../../components/_Epizody/Heading';

import styles from './Epizody.module.scss';
import { truncateString } from '../../../components/functions';

type IEpizoda = {
	datetime: number;
	description: string;
	duration: number;
	id: number;
	lastchange: number;
	poster: string; // "https://www.zaktv.cz/epizody/6724.jpg"
	postermini: string; // "https://www.zaktv.cz/epizody/6724-640.jpg"
	programme: number; //"88"
	programmetitle: string; // "30 let Městské policie Plzeň"
	status: string; // "visible"
	title: string; // "4. díl"
	url: string; // "https://vysilani.jihoceskatelevize.cz/jtv/6724/video.m3u8"
};

type IPorad = {
	id: number;
	lastchange: number;
	status: string;
	title: string;
	lead: string;
	description: string;
	logo: string;
	hosts?: any;
};

const Epizody = ({ epizody, porad }) => {
	const [search, setSearch] = useState('');
	const filteredEpizody = epizody.videos
		? epizody.videos.filter((epizoda) => {
				return (
					epizoda.title.toLowerCase().includes(search.toLowerCase()) ||
					htmlToFormattedText(epizoda.description).toLowerCase().includes(search.toLowerCase())
				);
		  })
		: 'Error'; // Error probably in fetching data

	const searchChange = (event) => {
		setSearch(event.target.value);
	};

	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Epizody | UTV</title>
			</Head>
			<GoBack path="/porady" />

			{/* In case epizodes are not returned */}
			{filteredEpizody === 'Error' ? (
				<div className={styles.error}>
					<h3>Epizody nenalezeny</h3>
				</div>
			) : (
				<>
					<Heading porad={porad} searchChange={searchChange} />

					<h3>Všechny epizody</h3>

					{filteredEpizody.map((epizoda: IEpizoda, i: number) => {
						if (epizoda.postermini) {
							return <Epizoda key={i} epizoda={epizoda} />;
						}
					})}

					{/* Displays Autoři only if it is returned from server */}
					{porad.hosts ? (
						<>
							<hr className="yellowDivider" />
							<div className={styles.autori}>
								<h3>Autoři</h3>
								{porad.hosts.map((autor, i) => {
									return <p>{autor.fullname}</p>;
								})}
							</div>
						</>
					) : (
						<></>
					)}
				</>
			)}
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch('https://data.zaktv.cz/programmes.json');
	const data = await res.json();

	const paths = data.programmes.map((porad) => ({
		params: { poradId: porad.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://data.zaktv.cz//videos.json?programme=${params.poradId}`);
	const data = await res.json();

	const poradRes = await fetch(`https://data.zaktv.cz/programmes/${params.poradId}.json`);
	const poradData = await poradRes.json();

	return {
		props: {
			epizody: data,
			porad: poradData.programme,
		}, // will be passed to the page component as props
		revalidate: 3600,
	};
}

export default Epizody;
