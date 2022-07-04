import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './card.module.scss';
import { truncateString } from '../functions';

const Porad = ({ porad }) => {
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
