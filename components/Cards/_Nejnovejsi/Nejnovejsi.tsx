import Link from 'next/link';
import React from 'react';
import { getDate } from '../../functions';
import ImageWithFallback from '../ImageWithFallback';
import styles from './Nejnovejsi.module.scss';

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
		url?: string; // "https://vysilani.zaktv.cz/zak/6702/video.m3u8"
	};
}

const Nejnovejsi: React.FC<IEpizoda> = ({ epizoda }) => {
	return (
		<>
			<Link href={`/porady/${epizoda.programme}/epizoda/${epizoda.id}`}>
				<div className={styles.card}>
					<div>
						<div className={styles.card_img}>
							<ImageWithFallback
								src={`${epizoda.postermini}`}
								layout="intrinsic"
								width={450}
								height={253}
							/>
						</div>
						<div className={styles.card_content}>
							<div className={styles.card_text}>
								<h3>{epizoda.title}</h3>
								<h4>{epizoda.programmetitle}</h4>
								<p className={styles.date}>{getDate(epizoda.datetime)}</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Nejnovejsi;
