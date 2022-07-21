// porady/index

import htmlToFormattedText from 'html-to-formatted-text';
import Head from 'next/head';
import { useState } from 'react';
import Porad from '../../components/Cards/_Porad/Porad';
import { fetcher } from '../../components/functions';
import SearchBox from '../../components/Navigation/_SearchBox/SearchBox';
import styles from './Porady.module.scss';

const Porady = ({ porady }) => {
	const [razeni, setRazeni] = useState('vzestupne');
	const [serazenePorady, setSerazenePorady] = useState(porady);
	const [search, setSearch] = useState('');

	//Obsluhuje dropdown a mění pořadí epizod.
	const razeniChange = (event) => {
		setRazeni(event.target.value);
		switch (event.target.value) {
			case 'vzestupne':
				setSerazenePorady(porady.slice(0));
				break;
			case 'sestupne':
				setSerazenePorady(porady.slice(0).reverse());
				break;
			case 'nahodne':
				setSerazenePorady(
					porady
						.slice(0)
						.map((value) => ({ value, sort: Math.random() }))
						.sort((a, b) => a.sort - b.sort)
						.map(({ value }) => value)
				);
				break;
			default:
				setSerazenePorady(porady.slice(0));
		}
	};

	// filtruje podle Search baru, obsah v názvu a v popisku
	let filteredPorady = serazenePorady.filter((porad) => {
		return (
			porad.title.toLowerCase().includes(search.toLowerCase()) ||
			htmlToFormattedText(porad.lead).toLowerCase().includes(search.toLowerCase())
		);
	});

	const searchChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div className={styles.porady}>
			<Head>
				<title>Pořady | UTV</title>
			</Head>

			<h2>Pořady</h2>
			<div className={styles.search}>
				<div className={styles.razeni}>
					Řazení:
					<select value={razeni} onChange={razeniChange}>
						<option value="vzestupne">Od A do Z</option>
						<option value="sestupne">Od Z do A</option>
						<option value="nahodne">Náhodně</option>
					</select>
				</div>
				<SearchBox searchChange={searchChange} placeholder="pořad" />
			</div>

			<div className={styles.cardsList}>
				{filteredPorady.map((porad, i: number) => {
					if (porad.logo) {
						return <Porad key={i} porad={porad} />;
					}
				})}
			</div>
		</div>
	);
};
export default Porady;

export async function getStaticProps() {
	const res = await fetcher(`programmes.json`);
	const data = res.programmes.filter((porad) => {
		return porad.status === 'current';
	});

	return {
		props: {
			porady: data,
		}, // will be passed to the page component as props
		revalidate: 60,
	};
}
