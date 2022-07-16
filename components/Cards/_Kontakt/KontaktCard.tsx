import Image from 'next/image';
import styles from './KontaktCard.module.scss';

const KontaktCard = ({ osoba }) => {
	return (
		<>
			<div className={styles.card}>
				<Image src={osoba.foto} layout="intrinsic" width={280} height={280} />
				<div className={styles.jmeno}>{osoba.jmeno}</div>
				<div className={styles.pozice}>{osoba.pozice}</div>
				<div className={styles.tel}>{osoba.tel}</div>
				<div className={styles.email}>{osoba.email}</div>
			</div>
		</>
	);
};

export default KontaktCard;
