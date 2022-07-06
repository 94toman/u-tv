import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { getDate, truncateString } from '../../functions';
import styles from './Epizoda.module.scss';

export interface IEpizoda {
	epizoda: {
		datetime: number;
		description?: string;
		duration?: number;
		id: number;
		lastchange?: number;
		poster?: string; // "https://www.zaktv.cz/epizody/6724.jpg"
		postermini: string; // "https://www.zaktv.cz/epizody/6724-640.jpg"
		programme: number; //"88"
		programmetitle: string; // "30 let Městské policie Plzeň"
		status?: string; // "visible"
		title: string; // "4. díl"
		url: string; // "https://vysilani.zaktv.cz/zak/6702/video.m3u8"
	};
}

const Epizoda: React.FC<IEpizoda> = ({ epizoda }) => {
	const router = useRouter();
	const { poradId } = router.query;
	return (
		<>
			<Link href={`${poradId}/epizoda/${epizoda.id}`}>
				<div className={styles.card}>
					<div>
						<div className={styles.card_img}>
							<Image src={`${epizoda.postermini}`} layout="intrinsic" width={450} height={253} />
						</div>
						<div className={styles.card_content}>
							<h3>{epizoda.title}</h3>
							<p>{getDate(epizoda.datetime)}</p>
							<p>{truncateString(epizoda.description, 250)}</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Epizoda;
