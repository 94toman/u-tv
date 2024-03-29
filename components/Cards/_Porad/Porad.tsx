import Image from 'next/image';
import React from 'react';
import { truncateString } from '../../functions';
import { NavLink } from '../../Layout/_Navbar/_NavLink/NavLink';
import styles from './Porad.module.scss';
// import ImageWithFallback from '../ImageWithFallback';

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

const Porad: React.FC<IPorad> = React.forwardRef(({ porad }) => {
	return (
		<>
			<NavLink exact={false} href={`porady/${porad.id}`}>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.card_img}>
							<Image src={porad.logo} layout="intrinsic" width={450} height={350} />
						</div>
						<div className={styles.card_content}>
							{porad.lead.length > 0 ? <p>{truncateString(porad.lead, 240)}</p> : <></>}
						</div>
					</div>
					<div className={styles.belowImage}>
						<h3>{truncateString(porad.title, 33)}</h3>
					</div>
				</div>
			</NavLink>
		</>
	);
});

export default Porad;
