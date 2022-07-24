import Link from 'next/link';
import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import styles from './Nejsledovanejsi.module.scss';

export interface IPorad {
	porad: {
		id: number;
		title: string;
		logo: string;
	};
}

const Nejsledovanejsi: React.FC<IPorad> = ({ porad }) => {
	return (
		<>
			<Link href={`/porady/${porad.id}`}>
				<div className={styles.card}>
					<div>
						<div className={styles.card_img}>
							<ImageWithFallback src={`${porad.logo}`} layout="intrinsic" width={450} height={253} />
						</div>
						<div className={styles.card_content}>
							<div className={styles.card_text}>
								<h3>{porad.title}</h3>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Nejsledovanejsi;
