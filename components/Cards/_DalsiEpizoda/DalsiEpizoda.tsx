import Image from 'next/image';
import Link from 'next/link';
import styles from './DalsiEpizoda.module.scss';

const DalsiEpizoda = ({ single }) => {
	return (
		<>
			<Link href={`/porady/${single.programme}/epizoda/${single.id}`}>
				<div className={styles.card}>
					{single.title}

					<br />
					<Image src={single.postermini} layout="intrinsic" width={200} height={120} />
				</div>
			</Link>
		</>
	);
};

export default DalsiEpizoda;
