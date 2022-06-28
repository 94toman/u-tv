import Link from 'next/link'

export const Pozemni = () => {
    return <>
        <p>Naše vysílání mohou sledovat všichni obyvatelé Ústeckého kraje, kteří přijímají signál z běžné televizní antény.
        Terestrické pokrytí nám zajišťuje společnost Digital Broadcasting. V roce 2020 v ČR změna vysílacího standardu na DVB-T2.</p>
        <p>V případě, že jste obyvatelem domu, kde je společná anténa, je potřeba zjistit, zdali vám již byl naladěn multiplex 24. To zjistíte tak, že přijímáte např. kanály NOVA, NOVA FUN, NOVA GOLD, RELAX, apod. V případě že ano, můžete si na vašem přijímači naladit vysílání i TV ZAK (viz návod níže). V případě, že výše uvedené kanály nechytáte přes společnou anténu, je potřeba vyhledat pomoc správce vaší antény a požádat ho o naladění multiplexu 24.</p>
        <p>Stručný návod, jak naladit TV ZAK na set-top boxu:</p>
        <ul>
            <li>Zapněte si televizi, popř. i externí set-top box.</li>
            <li>Na ovladači zmáčkněte tlačítko menu.</li>
            <li>V menu pomoci šipek na ovladači najeďte na automatické ladění (nebo také vyhledávání či skenování).</li>
            <li>Zmáčkněte OK nebo potvrdit.</li>
            <li>Projeďte všechny naladěné kanály.</li>
            <li>Nyní byste měli mít přidaný kanál TV ZAK.</li>
        </ul>        
    </>
    
}

export const Kabelove = () => {
    return <>
        
        <p>UTV je dostupné u vybraných poskytovatelů kabelov&eacute;ho&nbsp;sign&aacute;lu nejen v z&aacute;padn&iacute;ch Čech&aacute;ch, ale v cel&eacute; ČR.</p>
        <p>Vysíláme např. u poskytovatelů:</p>
        <ul>
            <li>Sledovani.tv</li>
            <li>Starnet TV</li>
            <li>Lepsi.tv</li>
            <li>4NET.TV</li>
            <li>Pilsfree TV</li>
            <li>ZKTV</li>
            <li>Kabel Ostrov</li>
            <li>Nika TV</li>
            <li>Rio Media a dal&scaron;&iacute;.&nbsp;</li>
        </ul>
    </>

}

export const Satelitni = () => {
    return <>
        <p>TV ZAK v současné době není dostupná v satelitním vysílání. Diváci, kteří využívají satelitní vysílání, si mohou vysílání pustit přes online vysílání nebo v archivu.</p>
    </> 
}

export const Internetove = () => {
    return <>
        <p>UTV má propracovaný video archiv, ve kterém je možné si pustit všechny naše pořady zpětně. Stačí zadat hledaný pořad, uvést ve vyhledávači hosta či jiné klíčové slovo a systém vám nabídne nalezené pořady.</p>
        <p>Celé naše aktuální vysílání je možné si zpětně pustit v odkazu <Link href='/porady'>Online vysílání.</Link></p>
    </>
    

}