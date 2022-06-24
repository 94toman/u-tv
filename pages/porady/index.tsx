// porady/index

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Card from '../../components/card'
import { Porad } from '../../interfaces'
import { useState } from "react";
import styles from '../../styles/Card.module.scss';

const Porady = ( { porad }) => {
  const [poradDb, setPoradDb] = useState();

    return (
        <div>
            <Head>
                <title>Pořady | UTV</title>
            </Head>
            <h1>Pořady</h1>
            <p>This is the Pořady page</p>

            {
              porad.map((porad, i) => {
                if (porad.logo) {
                return (
                      <Link href={`porady/${porad.id}`}>
                        <div className={styles.card}>
                        <div>
                          <div className={styles.card_img}>
                          <Image src={`${porad.logo}`} layout="intrinsic" width={450} height={253}/>
                          </div>
                          <div className={styles.card_text}>
                            <h2>{porad.title}</h2>
                            <p>{porad.lead}</p>
                          </div>
                        </div>      
                      </div>
                    </Link>            
                )
              }})
              
            }
            
            
         


            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </div>
    )
}


export default Porady


export async function getServerSideProps() {
    const res = await fetch(`https://data.zaktv.cz/programmes.json`);
    const data = await res.json();

    if (!data) {
        return {
          notFound: true,
        }
      }

    return {
      props: { porad: data.programmes}, // will be passed to the page component as props
    }
  }
