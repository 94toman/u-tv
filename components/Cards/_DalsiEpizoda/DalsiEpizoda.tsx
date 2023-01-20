import { getDate } from '../../functions';
import { NavLink } from '../../Layout/_Navbar/_NavLink/NavLink';
import ImageWithFallback from '../ImageWithFallback';
import styles from './DalsiEpizoda.module.scss';

const DalsiEpizoda = ({ single }) => {
	return (
		<>
			<NavLink exact={false} href={`/porady/${single.programme}/epizoda/${single.id}`}>
				<div className={styles.card}>
					<ImageWithFallback src={single.postermini} layout="intrinsic" width={256} height={144} />
					<div className={styles.textBelow}>
						<p className={styles.title}>{single.title}</p>
						<p className={styles.date}>{getDate(single.datetime)}</p>
					</div>
				</div>
			</NavLink>
		</>
	);
};

export default DalsiEpizoda;
