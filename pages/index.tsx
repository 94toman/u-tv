import Head from 'next/head';
import Image from 'next/image';
import Nejnovejsi from '../components/Cards/_Nejnovejsi/Nejnovejsi';
import Nejsledovanejsi from '../components/Cards/_Nejsledovanejsi/Nejsledovanejsi';
import { fetcher } from '../components/functions';
import Tip from '../components/Home/_Tip/Tip';
import pravcickaBrana from '../images/pravcickaBrana.png';
import logo from '../images/utv_logo-white.png';

import styles from './index.module.scss';

const IndexPage = ({ nejnovejsi, nejsledovanejsi }) => {
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
					<h1 className={styles.lead}>UTV</h1>
					<h2>
						Regionální televize <br />
						ústeckého kraje
					</h2>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.nejnovejsi}>
					<h3>Nejnovější epizody</h3>
					{nejnovejsi.videos.map((epizoda) => {
						return (
							<Nejnovejsi
								postermini={epizoda.postermini}
								programme={epizoda.programme}
								programmetitle={epizoda.programmetitle}
								title={epizoda.title}
								datetime={epizoda.datetime}
								id={epizoda.id}
							/>
						);
					})}
				</div>

				<Tip
					title={nejsledovanejsi[2].title}
					description={nejsledovanejsi[2].description}
					logo={nejsledovanejsi[2].logo}
					id={nejsledovanejsi[2].id}
				/>

				<div className={styles.nejsledovanejsi}>
					<h3>Nejsledovanější pořady</h3>
					{nejsledovanejsi.map((porad) => {
						return <Nejsledovanejsi id={porad.id} title={porad.title} logo={porad.logo} />;
					})}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const nejnovejsi = await fetcher(`videos.json?limit=3`);
	// Get first 3 episodes

	const porady = await fetcher(`programmes.json`);
	const nejsledovanejsi = await porady.programmes.slice(2, 5);

	return {
		props: {
			nejnovejsi: nejnovejsi,
			nejsledovanejsi: nejsledovanejsi,
		}, // will be passed to the page component as props
	};
}

export default IndexPage;
