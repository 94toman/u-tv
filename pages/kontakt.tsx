import react, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './kontakt.module.scss';

const KontaktPage = () => (
	<>
		<Head>
			<title>Kontakt | UTV</title>
		</Head>
		<h2>Kontakt</h2>
		<div className={styles.row}>
			<div className={styles.column}></div>
		</div>
		<p>This is the Kontakt page</p>

		<p>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</p>
	</>
);

export default KontaktPage;
