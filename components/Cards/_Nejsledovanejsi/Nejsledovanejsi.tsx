import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Nejsledovanejsi.module.scss';

export interface IPorad {
	id: number;
	title: string;
	logo: string;
}

const Nejsledovanejsi: React.FC<IPorad> = ({ id, title, logo }) => {
	return (
		<>
			<Link href={`/porady/${id}`}>
				<div className={styles.card}>
					<div>
						<div className={styles.card_img}>
							<Image src={`${logo}`} layout="intrinsic" width={450} height={253} />
						</div>
						<div className={styles.card_content}>
							<div className={styles.card_text}>
								<h3>{title}</h3>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Nejsledovanejsi;
