// porady/index

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Porad from '../../components/cards/Porad'
import { IPorad } from '../../interfaces'
import { useState } from "react";
import styles from '../../styles/Porad.module.scss';
import htmlToFormattedText from 'html-to-formatted-text';
import SearchBox from '../../components/SearchBox'

const Porady = ({porady}) => {
    const [search, setSearch] = useState('');
    const filteredPorady = porady.filter(porad => {
      return (porad.title.toLowerCase().includes(search.toLowerCase()) || 
      htmlToFormattedText(porad.lead).toLowerCase().includes(search.toLowerCase()))
    })
    
    const searchChange = (event) => {
      setSearch(event.target.value)
    }

    return (
        <div>
            <Head>
                <title>Pořady | UTV</title>
            </Head>
            <h2>Pořady</h2>
            <SearchBox searchChange={searchChange} placeholder='pořad' />

            <p>This is the Pořady page</p>
            {
              filteredPorady.map((porad, i) => {
                if (porad.logo) {
                  return (
                      
                        <Porad key={i} porad={porad}/>
                          
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
      props: {porady: data.programmes}, // will be passed to the page component as props
    }
  }
