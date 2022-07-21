// porady/index

import htmlToFormattedText from 'html-to-formatted-text';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Epizoda from '../../../components/Cards/_Epizoda/Epizoda';
import { fetcher, truncateString } from '../../../components/functions';
import GoBack from '../../../components/Navigation/_GoBack/GoBack';
import SearchBox from '../../../components/Navigation/_SearchBox/SearchBox';
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

//Heading of the page with Pořad details
export const Heading = ({ porad, searchChange }) => {
	return (
		<div className={styles.heading}>
			<div className={styles.image}>
				<Image
					src={`${porad.logo}`}
					layout="responsive"
					objectFit="cover"
					width={800}
					height={450}
					alt="porad-logo"
				/>
			</div>
			<div className={styles.overlay}>
				<h3>{porad.title}</h3>
				<div className={styles.leadWrapper}>
					<p className={styles.lead}>{truncateString(porad.lead, 420)}</p>
				</div>
				<div className={styles.search}>
					<SearchBox searchChange={searchChange} placeholder="epizodu" />
				</div>
			</div>
		</div>
	);
};

// Main content
const Epizody = ({ epizody, porad, paginateProps }) => {
	const router = useRouter();

	// SEARCH BAR
	const [search, setSearch] = useState('');
	let filteredEpizody = epizody.videos
		? epizody.videos.filter((epizoda) => {
				return (
					epizoda.title.toLowerCase().includes(search.toLowerCase()) ||
					htmlToFormattedText(epizoda.description).toLowerCase().includes(search.toLowerCase())
				);
		  })
		: 'Error'; // Error probably in fetching data

	const searchChange = (event) => {
		setSearch(event.target.value);
		filteredEpizody = epizody.videos.filter((epizoda) => {
			return (
				epizoda.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
				htmlToFormattedText(epizoda.description).toLowerCase().includes(event.target.value.toLowerCase())
			);
		});
		setSlicedEpizody(filteredEpizody.slice(0 * perPage, (0 + 1) * perPage));
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

			{
				// Error handling If epizodes are not returned
				filteredEpizody === 'Error' ? (
					<div className={styles.error}>
						<h2>Epizody nenalezeny</h2>
						<button className={styles.button} onClick={() => router.push(`/porady`)}>
							Zpět na pořady
						</button>
					</div>
				) : (
					// If everything is OK
					<>
						<Heading porad={porad} searchChange={searchChange} />

						<h3>Epizody:</h3>

						<div className={styles.cardsList}>
							{slicedEpizody[0] ? (
								slicedEpizody.map((epizoda: IEpizoda, i: number) => {
									if (epizoda.postermini) {
										return <Epizoda key={i} epizoda={epizoda} />;
									}
								})
							) : (
								<div>Nenalezeny žádné epizody</div>
							)}
						</div>

						{
							//Display Pagination only if there is more than one page
							pages > 1 ? (
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
							)
						}

						{
							//Displays Autoři only if it is returned from server
							porad.hosts ? (
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
							)
						}
					</>
				)
			}
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetcher(`programmes.json`);
	const data = res.programmes.filter((porad) => {
		return porad.status === 'current';
	});

	//slice didn't reduce the build time
	const paths = data.map((porad) => ({
		params: { poradId: porad.id.toString() },
	}));

	return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
	const data = await fetcher(`videos.json?programme=${params.poradId}`);
	const poradData = await fetcher(`programmes/${params.poradId}.json`);

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
		revalidate: 60,
	};
}

export default Epizody;
