// porady/index

import htmlToFormattedText from 'html-to-formatted-text';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Epizoda from '../../../components/Cards/_Epizoda/Epizoda';
import { fetcher } from '../../../components/functions';
import GoBack from '../../../components/Navigation/_GoBack/GoBack';
import HeadingPorady from '../../../components/_Epizody/HeadingPorady';
import styles from './Epizody.module.scss';

//  import ReactPaginate from 'react-paginate';  https://vpilip.com/how-build-simple-pagination-in-nextjs/

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

type IPaginate = {
	perPage: number;
	page: number;
	pages: number;
};

const Epizody = ({ epizody, porad, paginateProps }) => {
	const router = useRouter();
	const { strana } = router.query;

	// funkce, která mění konec URL
	const stranaQuery = (strana) => {
		router.replace(
			{
				query: { ...router.query, strana: strana },
			},
			undefined,
			{ shallow: true }
		); // shallow: aby stránka zůstala kde je
	};

	// SEARCH BAR
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
		setPaginate({ ...paginate, page: 0 });
	};

	// PAGINATION
	const [paginate, setPaginate] = useState(paginateProps);
	const { perPage, page, pages }: IPaginate = paginate;
	const [slicedEpizody, setSlicedEpizody] = useState(filteredEpizody.slice(page * perPage, (page + 1) * perPage));

	const handlePageClick = (event) => {
		setPaginate({ ...paginate, page: event.selected });
		setSlicedEpizody(filteredEpizody.slice(event.selected * perPage, (event.selected + 1) * perPage));
		//history.pushState();
	};

	return (
		<div>
			<Head>
				<title>Epizody | UTV</title>
			</Head>
			<GoBack path="/porady" />

			{/* In case epizodes are not returned */}
			{filteredEpizody === 'Error' ? (
				<div className={styles.error}>
					<h2>Epizody nenalezeny</h2>
					<button className={styles.button} onClick={() => router.push(`/porady`)}>
						Zpět na pořady
					</button>
				</div>
			) : (
				<>
					<HeadingPorady porad={porad} searchChange={searchChange} />

					<h3>Epizody:</h3>

					{slicedEpizody.map((epizoda: IEpizoda, i: number) => {
						if (epizoda.postermini) {
							return <Epizoda key={i} epizoda={epizoda} />;
						}
					})}

					{/*Display Pagination only if there is more than one page */}
					{pages > 1 ? (
						<ReactPaginate
							previousLabel={'<<'}
							nextLabel={'>>'}
							pageCount={pages}
							onPageChange={handlePageClick}
							forcePage={paginate.page}
							containerClassName={'pagination'}
							activeClassName={'active'}
						/>
					) : (
						<></>
					)}

					{/* Displays Autoři only if it is returned from server */}
					{porad.hosts ? (
						<>
							<hr className="yellowDivider" />
							<div className={styles.autori}>
								<h3>Autoři</h3>
								{porad.hosts.map((autor, i) => {
									return <p key={i}>{autor.fullname}</p>;
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
	const data = await fetcher(`programmes.json`);

	const paths = data.programmes.map((porad) => ({
		params: { poradId: porad.id.toString() },
	}));

	return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, query }) {
	const data = await fetcher(`videos.json?programme=${params.poradId}`);
	const poradData = await fetcher(`programmes/${params.poradId}.json`);

	console.log(query);

	return {
		props: {
			epizody: data,
			porad: poradData.programme,
			paginateProps: {
				perPage: 15,
				page: 0,
				pages: data.videos ? Math.floor(data.videos.length / 15 + 1) : 0,
			},
		}, // will be passed to the page component as props
		revalidate: 86400,
	};
}

export default Epizody;
