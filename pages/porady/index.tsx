// porady/index

import htmlToFormattedText from 'html-to-formatted-text';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Porad from '../../components/Cards/_Porad/Porad';
import { fetcher } from '../../components/functions';
import SearchBox from '../../components/Navigation/_SearchBox/SearchBox';

import styles from './Porady.module.scss';

const Porady = ({ porady }) => {
	const router = useRouter();
	const { kategorie } = router.query;
	const [filtrovanePorady, setFilrovanePorady] = useState(
		porady.filter((porad) => {
			switch (kategorie) {
				case 'current':
				case 'obsolete':
					return porad.status === kategorie;
				case 'zpravy':
					return porad.category.nazev === 'zpravy';
				case undefined:
				case 'all':
					return porad;
				default:
					porad.category.nazev === kategorie;
			}
		})
	);
	const [razeni, setRazeni] = useState('vzestupne');
	const [serazenePorady, setSerazenePorady] = useState(filtrovanePorady);
	const [search, setSearch] = useState('');

	//Obsluhuje dropdown a mění pořadí epizod.
	const razeniChange = (event) => {
		setRazeni(event.target.value);
		switch (event.target.value) {
			case 'vzestupne':
				setSerazenePorady(filtrovanePorady.slice(0));
				break;
			case 'sestupne':
				setSerazenePorady(filtrovanePorady.slice(0).reverse());
				break;
			case 'nahodne':
				setSerazenePorady(
					filtrovanePorady
						.slice(0)
						.map((value) => ({ value, sort: Math.random() }))
						.sort((a, b) => a.sort - b.sort)
						.map(({ value }) => value)
				);
				break;
			default:
				setSerazenePorady(filtrovanePorady.slice(0));
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

	// funkce, která mění konec URL
	const tabClick = (cat) => {
		router.replace(
			{
				query: { ...router.query, kategorie: cat },
			},
			undefined,
			{ shallow: true }
		); // shallow: aby stránka zůstala kde je
	};

	return (
		<div className={styles.porady}>
			<Head>
				<title>Pořady | UTV</title>
			</Head>

			<div className={styles.submenu}>
				{/* Black space left from menu */}
				<div className={styles.spacer}></div>

				<div className={styles.navContainer}>
					{/* Displaying and hiding mobile menu */}
					<nav>
						{/* Rest of the menu is the same for PC and mobile*/}
						<a onClick={() => tabClick('all')}>VŠE</a>
						<a onClick={() => tabClick('current')}>AKTUÁLNĚ VYSÍLANÉ</a>
						<a onClick={() => tabClick('obsolete')}>ARCHIV</a>
						<a onClick={() => tabClick('zpravy')}>ZPRÁVY</a>
						<a onClick={() => tabClick('dokumenty')}>DOKUMENTY</a>
						<a onClick={() => tabClick('sport')}>SPORT</a>
					</nav>
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
				</div>
			</div>

			<div className={styles.content}>
				<h2>Pořady</h2>

				<div className={styles.cardsList}>
					{filteredPorady[0] ? (
						filteredPorady.map((porad, i: number) => {
							if (porad.logo) {
								return <Porad key={i} porad={porad} />;
							}
						})
					) : (
						<div>Nenalezeny žádné pořady</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default Porady;

export async function getStaticProps() {
	const res = await fetcher(`programmes.json`);
	// const data = res.programmes.filter((porad) => {
	// 	return porad.status === 'current';
	// });

	return {
		props: {
			porady: res.programmes, //data -> zobrazit je current
		}, // will be passed to the page component as props
		revalidate: 60,
	};
}
