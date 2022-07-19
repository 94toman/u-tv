import { useRouter } from 'next/router';
import { MdArrowBackIosNew } from 'react-icons/md';
import styles from './GoBack.module.scss';

const GoBack = ({ path }) => {
	const router = useRouter();

	return (
		<>
			<div className={styles.wrapper} onClick={() => router.push(`${path}`) /*.back()*/}>
				<div className={styles.content}>
					<p>
						<MdArrowBackIosNew fontSize="1.8em" /> Zpět
					</p>
				</div>
			</div>
		</>
	);
};

export default GoBack;
