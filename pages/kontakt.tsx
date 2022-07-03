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
			<div className={styles.left}>
				<div className={styles.table}>info@utv.cz</div>
				<div className={styles.table}>
					+420 371 650 138
					<br />
					<span className={styles.volejte}>(VOLEJTE V ČASE 8:00 - 16:30)</span>
				</div>
			</div>
			<div className={styles.right}>
				ZAK TV s.r.o. <br />
				Prokopova 26 <br />
				301 00 Plzeň <br />
				<br />
				IČ: 64835669 <br />
				DIČ: CZ64835669
			</div>
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

/*
				<table>
					<tr>info@utv.cz</tr>
					<tr>+420 371 650 138</tr>
				</table>
*/
