import Head from 'next/head';
import Image from 'next/image';
import pravcickaBrana from '../images/pravcickaBrana.png';
import logo from '../images/utv_logo-white.png';
import styles from './index.module.scss';

const IndexPage = ({ porady }) => (
	// https://www.figma.com/file/Gyf7KGAHIjsoz16cQxpDBG/UTV-draft?node-id=0%3A1
	<>
		<Head>
			<title>Home | UTV</title>
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
				<h3>Moderátor Jonáš Novotný</h3>
				<p className={styles.lead}>Každých 14 dní</p>
			</div>
		</div>

		<div className={styles.content}>
			<div className={styles.nejnovejsi}>
				<h3>Nejnovější epizody</h3>
			</div>

			<div className={styles.tip}>
				<h3>Tip týdne</h3>
			</div>

			<div className={styles.nejsledovanejsi}>
				<h3>Nejsledovanější pořady</h3>
			</div>
		</div>
	</>
);

export default IndexPage;
