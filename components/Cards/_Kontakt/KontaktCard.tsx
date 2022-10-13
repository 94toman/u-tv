// import Image from 'next/image';
import silueta from '../../../images/silueta.webp';
import { truncateString } from '../../functions';
import styles from './KontaktCard.module.scss';

const KontaktCard = ({ osoba }) => {
	if (!osoba.fullname) {
		osoba.fullname = '';
	}
	if (!osoba.department) {
		osoba.department = 'Obchodní oddělení';
	}
	if (!osoba.jobtitle) {
		osoba.jobtitle = '';
	}
	if (!osoba.phone) {
		osoba.phone = '';
	}
	if (!osoba.email) {
		osoba.email = '';
	}
	if (!osoba.photo) {
		osoba.photo = silueta;
	}

	return (
		<>
			<div className={styles.card}>
				{/* TEMP - obrázky skryté */}
				{/* <Image src={osoba.photo} layout="intrinsic" width={260} height={260} /> */}
				<p className={styles.jmeno}>{osoba.fullname}</p>
				<p className={styles.pozice}>{truncateString(osoba.jobtitle, 39)}</p>
				<a className={styles.tel} href={`tel:${osoba.phone}`}>
					{osoba.phone}
				</a>
				<a className={styles.mail} href={`mailto:${osoba.email}`}>
					{osoba.email}
				</a>
			</div>
		</>
	);
};

export default KontaktCard;
