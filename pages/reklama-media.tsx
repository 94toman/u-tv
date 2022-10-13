// name "reklama" causes the page to not work. Temporarily named reklama-media

import Image from 'next/image';
import { useState } from 'react';
import dosahTmp from '../images/dosah_tmp.png';
import spolupraceTmp from '../images/spoluprace_tmp.png';
import styles from './reklama-media.module.scss';

const ReklamaMedia = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	return (
		<div className={styles.wrapper}>
			<h2>Reklama</h2>
			<div className={styles.copy}>
				<h3>PREZENTUJTE SE A INZERUJTE</h3>
				<p>
					Jediná regionální televize v Ústeckém kraji s nonstop vysíláním, IPTV a terestrickým pokrytím celého
					regionu.
				</p>
				<p>
					S námi budete vidět.
					<br />
					Efektivně zvýšíme povědomí o vašich akcích, službách, organizaci či značce
				</p>
				<div className={styles.spoluprace}>
					<Image
						src={spolupraceTmp}
						layout="responsive"
						objectFit="cover"
						width={1525}
						height={431}
						alt="pravcicka-brana"
					/>
					{/* <h3>Jak probíhá spolupráce s námi</h3>
					<ul>
						<li>Společně najdeme nejlepší způsob vaší prezentace</li>
						<li>Připravíme spot či reportáž</li>
						<li>Schválíme finální podobu</li>
						<li>Určíte si čas a počet opakování. Začínáme vysílat</li>

						<li data-aos="zoom-in-down" className="aos-init aos-animate"><strong>01</strong> <img src="/obrazky/lpreklama/spoluprace-step1.png" alt="1. krok"> <span>Společně najdeme nejlepší způsob vaší prezentace</span></li>
						<li data-aos="zoom-in-down" className="aos-init aos-animate"><strong>02</strong> <img src="/obrazky/lpreklama/spoluprace-step2.png" alt="2. krok"> <span>Připravíme spot či reportáž</span></li>
						<li data-aos="zoom-in-down" className="aos-init aos-animate"><strong>03</strong> <img src="/obrazky/lpreklama/spoluprace-step3.png" alt="3. krok"> <span>Schválíme finální podobu</span></li>
						<li data-aos="zoom-in-down" className="aos-init aos-animate"><strong>04</strong> <img src="/obrazky/lpreklama/spoluprace-step4.png" alt="4. krok"> <span>Určíte si čas a počet opakování. Začínáme vysílat.</span></li> 
					</ul>
					 */}
				</div>
				<br />
				<p>
					Připravíme pro vás spoty a reportáže, které budou diváky bavit. Vaše zákazníky či návštěvníky
					oslovíme zajímavě a efektivně.
				</p>
				<Image
					src={dosahTmp}
					layout="responsive"
					objectFit="cover"
					width={1675}
					height={745}
					alt="pravcicka-brana"
				/>
				<h3>Kontaktujte nás</h3>
				<p>
					Roman Coňk <br />
					Mediální konzultant <br />
					<a href="tel:+420724000528">+420 724 000 528</a> <br />
					<a href="mailto:conk@televizeutv.cz">conk@televizeutv.cz</a>
				</p>

				<div className={styles.form}>
					<form
						// onSubmit={handleSubmit}
						className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
					>
						<label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">
							Jméno<span className="text-red-500 dark:text-gray-50">*</span>
						</label>
						<input
							type="text"
							value={fullname}
							onChange={(e) => {
								setFullname(e.target.value);
							}}
							name="fullname"
							className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
						/>

						<label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
							E-mail<span className="text-red-500">*</span>
						</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
						/>

						<label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">
							Předmět<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							name="subject"
							value={subject}
							onChange={(e) => {
								setSubject(e.target.value);
							}}
							className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
						/>

						<label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">
							Zpráva<span className="text-red-500">*</span>
						</label>
						<textarea
							name="message"
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
						></textarea>

						<div className="flex flex-row items-center justify-start">
							<button
								type="submit"
								className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
							>
								Odeslat
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ReklamaMedia;
