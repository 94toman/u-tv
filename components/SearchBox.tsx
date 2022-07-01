import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = ({ searchChange, placeholder }) => {
	return (
		<div className={styles.wrapper}>
			<input
				type="search"
				placeholder={`Vyhledat ${placeholder}`}
				onChange={searchChange}
				title="Vyhledávání podle názvu a popisku"
			/>
		</div>
	);
};

export default SearchBox;
