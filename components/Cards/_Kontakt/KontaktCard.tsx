import Image from 'next/image';
import { truncateString } from '../../functions';
import styles from './KontaktCard.module.scss';

const KontaktCard = ({ osoba }) => {
	return (
		<>
			<div className={styles.card}>
				<Image src={osoba.foto} layout="intrinsic" width={280} height={280} />
				<p className={styles.jmeno}>{osoba.jmeno}</p>
				<p className={styles.pozice}>{truncateString(osoba.pozice, 39)}</p>
				<a className={styles.tel} href={`tel:${osoba.tel}`}>
					{osoba.tel}
				</a>
				<a className={styles.email} href={`mailto:${osoba.email}`}>
					{osoba.email}
				</a>
			</div>
		</>
	);
};

export default KontaktCard;
