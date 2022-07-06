import Image from 'next/image';
import Link from 'next/link';
import { truncateString } from '../../functions';
import styles from './Tip.module.scss';

const Tip = ({ title, description, logo, id }) => {
	return (
		<>
			<Link href={`porady/${id}`}>
				<div className={styles.tip}>
					<div className={styles.content}>
						<div className={styles.text}>
							<h4>Tip týdne</h4>
							<h3>{title}</h3>
							<p>{truncateString(description, 400)}</p>
						</div>
						<div className={styles.image}>
							<Image src={`${logo}`} layout="intrinsic" width={600} height={344} />
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Tip;
