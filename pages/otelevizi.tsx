import styles from './otelevizi.module.scss';

const Otelevizi = () => {
	return (
		<div className={styles.wrapper}>
			<h2>O televizi</h2>

			<div className={styles.copy}>
				<p>
					Televize Ústeckého kraje <br />
					Ústecká média s. r. o. <br />
					<a href="www.televizeutv.cz" target="_blank">
						www.televizeutv.cz
					</a>
				</p>
				<p>
					Ústecký kraj byl až do nedávna jediným krajem bez vlastní regionální televize s pokrytím celého
					svého území. Televize Ústeckého kraje vznikla ve spolupráci IPC a. s. a dalších subjektů s bohatou
					zkušeností z mediální i reklamní sféry. Televize začala vysílat v červenci 2022 a od té doby se
					dynamicky rozvíjí.
				</p>
				<p>
					Již nyní den co den přináší svým divákům informace, které je zajímají nejvíce, protože se týkají
					jejich bezprostředního okolí. Na svých obrazovkách spatřují tváře, které běžně potkávají v reálném
					životě, ulice ve kterých žijí, nebo politiky, kteří je zastupují na komunální a regionální úrovni.
					Tyto aspekty dělají z ÚTV informační a reklamní nosič s vysokou přidanou hodnotou v podobě rostoucí
					divácké obce a vysoké důvěryhodnosti.
				</p>

				<p>
					Sledovanost televizních kanálů navzdory rozvoji internetu i v dnešní době stále vzrůstá. ÚTV navíc
					patří do unikátní sítě regionálních televizí Regionu TV 1, které svým signálem pokrývají celou
					českou republiku. Televize je tak schopna uskutečňovat celostátní kampaně a vzájemně sdílet jakýkoli
					vhodný obsah. Právě zde se tak otevírá prostor pro další aktivity IPC a. s. na mediálním poli.
				</p>
				<p>
					Příjmy regionální televize plynou především ze spolupráce s krajem, městy, obcemi a jejich
					organizacemi (na základě dohodnuté podoby poskytování mediálního prostoru) a soukromým sektorem
					(reklamní spoty, kampaně, tematické pořady, sponzoring). Televize Ústeckého kraje díky úzké
					spolupráci s jinými, po desítky let fungujícími regionálními televizními stanicemi, tak nevstupuje
					na neprobádané území.
				</p>
				<p>
					ÚTV má terestrické pokrytí („na anténu“) po celém území Ústeckého kraje a vysílá rovněž
					prostřednictvím vybraných poskytovatelů IPTV.
				</p>
			</div>
		</div>
	);
};

export default Otelevizi;
