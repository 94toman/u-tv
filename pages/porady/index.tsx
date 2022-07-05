// porady/index

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Porad from '../../components/_Cards/Porad';
import { IPorad } from '../../interfaces';
import { useState } from 'react';
import styles from './Porady.module.scss';
import htmlToFormattedText from 'html-to-formatted-text';
import SearchBox from '../../components/_SearchBox/SearchBox';
import GoBack from '../../components/_GoBack/GoBack';
import { rcast } from '../../components/functions';

const Porady = ({ porady }) => {
	const [search, setSearch] = useState('');
	const filteredPorady = porady.filter((porad) => {
		return (
			porad.title.toLowerCase().includes(search.toLowerCase()) ||
			htmlToFormattedText(porad.lead).toLowerCase().includes(search.toLowerCase())
		);
	});

	const searchChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div>
			<Head>
				<title>Pořady | UTV</title>
			</Head>

			<h2>Pořady</h2>
			<div className={styles.search}>
				<SearchBox searchChange={searchChange} placeholder="pořad" />
			</div>

			{filteredPorady.map((porad, i) => {
				if (porad.logo) {
					return <Porad key={i} porad={porad} />;
				}
			})}
			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${rcast}/programmes.json`);
	const data = await res.json();

	return {
		props: {
			porady: data.programmes,
		}, // will be passed to the page component as props
		revalidate: 86400,
	};
}

export default Porady;
