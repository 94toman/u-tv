import Image from 'next/image';
import Link from 'next/link';
import { getDate } from '../../functions';
import styles from './DalsiEpizoda.module.scss';

const DalsiEpizoda = ({ single }) => {
	return (
		<>
			<Link href={`/porady/${single.programme}/epizoda/${single.id}`}>
				<div className={styles.card}>
					<Image src={single.postermini} layout="intrinsic" width={256} height={144} />

					<div className={styles.textBelow}>
						<p className={styles.title}>{single.title}</p>
						<p className={styles.date}>{getDate(single.datetime)}</p>
					</div>
				</div>
			</Link>
		</>
	);
};

export default DalsiEpizoda;
