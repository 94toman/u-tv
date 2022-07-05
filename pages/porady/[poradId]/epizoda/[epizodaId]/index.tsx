// porady/index
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getDate } from '../../../../../components/functions';
import htmlToFormattedText from 'html-to-formatted-text';
import GoBack from '../../../../../components/_GoBack/GoBack';
import styles from './Epizoda.module.scss';
import dynamic from 'next/dynamic';
import { rcast } from '../../../../../components/functions';

const Player = dynamic(() => import('../../../../../components/_Player/Player'), {
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

type IPorad = {
	id: number;
	lastchange: number;
	status: string;
	title: string;
	lead: string;
	description: string;
	logo: string;
};

const Epizoda = ({ epizoda, porad }) => {
	const router = useRouter();

	const video: IEpizoda = epizoda.video;
	const programme: IPorad = porad.programme;

	return (
		<div>
			<Head>
				<title>Episoda | UTV</title>
			</Head>
			<GoBack path={`/porady/${programme.id}`} />

			{epizoda.result === 'error' ? (
				// Error handling
				<>
					<h2>Pořad: {programme.title}</h2>
					<h3>Epizoda nenalezena</h3>
					<button onClick={() => router.back()}>Go BACK</button>
				</>
			) : (
				// Displaying content
				<>
					<div className={styles.mainBar}>
						<div className={styles.player}>
							<Player video={video} />
						</div>
						<div className={styles.podVideem}>
							<h2>{video.title}</h2>
							<p className={styles.date}>{getDate(video.datetime)}</p>

							<p>{htmlToFormattedText(epizoda.video.description)}</p>

							<hr className="yellowDivider" />

							<div className={styles.nazevPoradu}>
								<div className={styles.roundImage}>
									<div className={styles.centerImage}>
										<Link href={`/porady/${video.programme}`}>
											<Image
												src={programme.logo}
												objectFit="cover"
												layout="fixed"
												width={355.55}
												height={200}
											/>
										</Link>
									</div>
								</div>
								<div className={styles.nazev}>
									<h3>
										Název pořadu:
										<br />
										{programme.title}
									</h3>
								</div>
							</div>

							<div className={styles.prostorReklama}>
								<div className={styles.reklama}>
									<span>PROSTOR PRO REKLAMU</span>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.sideBar}>
						<div>Epizoda 1</div>
						<div>Epizoda 2</div>
						<div>Epizoda 3</div>
						<div className={styles.sideReklama}>PROSTOR PRO REKLAMU</div>
						<div>Epizoda 4</div>
					</div>
				</>
			)}
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`${rcast}/videos.json?limit=999999`);
	const data = await res.json();

	const paths = data.videos.map((video) => ({
		params: {
			epizodaId: video.id.toString(),
			poradId: video.programme.toString(),
		},
	}));

	return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
	const res = await fetch(`${rcast}/videos/${params.epizodaId}.json`);
	const data = await res.json();

	const poradRes = await fetch(`${rcast}/programmes/${params.poradId}.json`);
	const poradData = await poradRes.json();

	return {
		props: {
			epizoda: data,
			porad: poradData,
		}, // will be passed to the page component as props
		revalidate: 86400,
	};
}

export default Epizoda;
