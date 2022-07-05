import Image from 'next/image';
import Link from 'next/link';
import { truncateString } from '../functions';
import styles from './card.module.scss';

export interface IPorad {
	porad: {
		id: number;
		lastchange: number;
		status: string;
		title: string;
		lead: string;
		description: string;
		logo: string;
	};
}

const Porad: React.FC<IPorad> = ({ porad }) => {
	return (
		<>
			<Link href={`porady/${porad.id}`}>
				<div className={styles.card}>
					<div>
						<div className={styles.card_img}>
							<Image src={`${porad.logo}`} layout="intrinsic" width={450} height={253} />
						</div>
						<div className={styles.card_text}>
							<h3>{porad.title}</h3>
							<p>{truncateString(porad.lead, 220)}</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Porad;
