import loading from './loading.gif';
import Image from 'next/image';
import styles from './Loading.module.scss';

const PageLoader = () => {
	return (
		<div className={styles.center}>
			<h2>Načítám</h2>
			<Image src={loading} width={250} height={250} />
		</div>
	);
};

export default PageLoader;
