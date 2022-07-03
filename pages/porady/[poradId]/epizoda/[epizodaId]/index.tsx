// porady/index
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import htmlToFormattedText from 'html-to-formatted-text';
import styles from './Epizoda.module.scss';
import dynamic from 'next/dynamic';
const Player = dynamic(() => import('../../../../../components/Player'), {
	ssr: false,
});

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
	url: string; // "https://vysilani.zaktv.cz/zak/6702/video.m3u8"
};

const Epizoda = ({ epizoda, porad }) => {
	const router = useRouter();

	const video: IEpizoda = epizoda.video;

	return (
		<div>
			<Head>
				<title>Episoda | UTV</title>
			</Head>

			{epizoda.result === 'error' ? (
				// Error handling
				<>
					<h2>Pořad: {porad.programme.title}</h2>
					<h3>Epizoda nenalezena</h3>
					<button onClick={() => router.back()}>Go BACK</button>
				</>
			) : (
				// Displaying content
				<>
					<div className={styles.player}>
						<Player video={video} />
					</div>
					<h2>Pořad: {porad.programme.title}</h2>
					<h3>{video.title}</h3>
					<p>{htmlToFormattedText(epizoda.video.description)}</p>
					<p>
						<button onClick={() => router.back()}>Go BACK</button>
					</p>

					<p>ID: {video.id}</p>
					<p>Duration: {video.duration}</p>
				</>
			)}

			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch('https://data.zaktv.cz/videos.json?limit=999999');
	const data = await res.json();

	const paths = data.videos.map((video) => ({
		params: {
			epizodaId: video.id.toString(),
			poradId: video.programme.toString(),
		},
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://data.zaktv.cz/videos/${params.epizodaId}.json`);
	const data = await res.json();

	//const resPorad = await fetch(`https://data.zaktv.cz/videos.json?programme=${poradId}`);
	const poradRes = await fetch(`https://data.zaktv.cz/programmes/${params.poradId}.json`);
	const poradData = await poradRes.json();

	return {
		props: {
			epizoda: data,
			porad: poradData,
		}, // will be passed to the page component as props
		revalidate: 3600,
	};
}

export default Epizoda;

// export async function getServerSideProps(context) {
// 	const { poradId, epizodaId } = context.query;
// 	const res = await fetch(`https://data.zaktv.cz/videos/${epizodaId}.json`);
// 	const data = await res.json();

// 	//const resPorad = await fetch(`https://data.zaktv.cz/videos.json?programme=${poradId}`);
// 	const poradRes = await fetch(`https://data.zaktv.cz/programmes/${poradId}.json`);
// 	const poradData = await poradRes.json();

// 	return {
// 		props: {
// 			epizoda: data,
// 			porad: poradData,
// 		}, // will be passed to the page component as props
// 	};
// }

// Zkoušel jsem vytvářel pole ajdýček
/*
export async function getEpisodesOfProgramme(id) {
	const epizodyIdArray = [];
	const epizodyRes = await fetch(`https://data.zaktv.cz//videos.json?programme=${id}`);
	const epizodyData = await epizodyRes.json();
	console.log(epizodyData);
	await epizodyData.map((epizoda) => {
		epizodyIdArray.push(epizoda.id);
	});
	return epizodyIdArray;
}
export async function getStaticPaths() {
	const videosIds = [];

	const progs = await fetch('https://data.zaktv.cz/programmes.json');
	const progsData = await progs.json();
	await progsData.programmes.map((porad) => {
		videosIds.push(getEpisodesOfProgramme(porad.id));
		console.log(videosIds);
	});

	const paths = videosIds.map((video) => ({
		params: {
			epizodaId: video.id.toString(),
			poradId: video.programme.toString(),
		},
	}));

	return { paths, fallback: false };
}
*/
