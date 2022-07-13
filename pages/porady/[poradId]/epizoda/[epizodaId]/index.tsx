// porady/index
import htmlToFormattedText from 'html-to-formatted-text';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { fetcher, getDate } from '../../../../../components/functions';
import GoBack from '../../../../../components/Navigation/_GoBack/GoBack';
import styles from './Epizoda.module.scss';

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

const Epizoda = ({ epizoda, porad, epizody }) => {
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
						<div className={styles.sideContent}>
							{epizody.slice(0, 3).map((single, i) => {
								return (
									<div>
										Epizoda {i + 1}
										<br />
										{single.title}
										<br />
										<Image src={single.postermini} layout="intrinsic" width={200} height={120} />
									</div>
								);
							})}
							<div className={styles.sideReklama}>PROSTOR PRO REKLAMU</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export async function getStaticPaths() {
	const data = await fetcher(`/videos.json?limit=999999`);

	const paths = data.videos.map((video) => ({
		params: {
			epizodaId: video.id.toString(),
			poradId: video.programme.toString(),
		},
	}));

	return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
	const data = await fetcher(`videos/${params.epizodaId}.json`);
	const poradData = await fetcher(`/programmes/${params.poradId}.json`);
	const epizody = await fetcher(`/videos.json?programme=${params.poradId}`);

	return {
		props: {
			epizoda: data,
			porad: poradData,
			epizody: epizody.videos,
		}, // will be passed to the page component as props
		revalidate: 86400,
	};
}

export default Epizoda;
