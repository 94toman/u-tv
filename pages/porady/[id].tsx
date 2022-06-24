// porady/index

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Porad from '../../components/Porad'
import { IPorad } from '../../interfaces'
import { useState } from "react";
import styles from '../../styles/Porad.module.scss';

const Porady = ( { porad }) => {

    return (
        <div>
            <Head>
                <title>Episody | UTV</title>
            </Head>
            <h1>Episody</h1>
            <p>This is the Episody page</p>
            {
              porad.map((porad, i) => {
                if (porad.logo) {
                  return (
                      
                        <Porad porad={porad}/>
                          
                  )
                }
              })
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
