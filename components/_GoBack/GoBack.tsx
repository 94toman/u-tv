import styles from './GoBack.module.scss';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/router';

const GoBack = () => {
	const router = useRouter();

	return (
		<>
			<div className={styles.wrapper} onClick={() => router.push('/porady') /*.back()*/}>
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