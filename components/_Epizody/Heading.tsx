import Image from 'next/image';
import { truncateString } from '../functions';
import SearchBox from '../Navigation/_SearchBox/SearchBox';
import styles from './Heading.module.scss';

const Heading = ({ porad, searchChange }) => {
	return (
		<div className={styles.heading}>
			<div className={styles.image}>
				<Image
					src={`${porad.logo}`}
					layout="responsive"
					objectFit="contain"
					width={800}
					height={450}
					alt="porad-logo"
				/>
			</div>
			<div className={styles.overlay}>
				<h3>{porad.title}</h3>
				<div className={styles.leadWrapper}>
					<p className={styles.lead}>{truncateString(porad.lead, 420)}</p>
				</div>
				<div className={styles.search}>
					<SearchBox searchChange={searchChange} placeholder="epizodu" />
				</div>
			</div>
		</div>
	);
};

export default Heading;
