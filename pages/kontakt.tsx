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
			<div className={styles.col}>
				<table>
					<tr>info@utv.cz</tr>
					<tr>+420 371 650 138</tr>
				</table>
			</div>
			<div className={styles.col}>Test2</div>
		</div>
		<tr>
			<th>Test</th>
			<th>Test2</th>
		</tr>
		<p>This is the Kontakt page</p>

		<p>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</p>
	</>
);

export default KontaktPage;
