// porady/index

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Porad from '../../../components/cards/Porad'
import { IPorad } from '../../../interfaces'
import { useState } from "react";
import htmlToFormattedText from 'html-to-formatted-text';
import Epizoda from '../../../components/cards/Epizoda';
import SearchBox from '../../../components/SearchBox';
import styles from '../../../styles/Epizody.module.scss'

type IEpizoda = {
  datetime: number
  description: string
  duration: number
  id: number
  lastchange: number
  poster: string   // "https://www.zaktv.cz/epizody/6724.jpg"
  postermini: string // "https://www.zaktv.cz/epizody/6724-640.jpg"
  programme: number //"88"
  programmetitle: string // "30 let Městské policie Plzeň"
  status: string // "visible"
  title: string // "4. díl"
  url: string // "https://vysilani.jihoceskatelevize.cz/jtv/6724/video.m3u8"
}


const Epizody = ({epizody, porad}) => {
  const [search, setSearch] = useState('');
  const filteredEpizody = ((epizody.videos) ?
      epizody.videos.filter(epizoda => {
        return (epizoda.title.toLowerCase().includes(search.toLowerCase()) || 
        htmlToFormattedText(epizoda.description).toLowerCase().includes(search.toLowerCase()))
      }
  )
  : 'Error'  // Error probably in fetching data
  )
  
    
  const searchChange = (event) => {
    setSearch(event.target.value)
  }

  const router = useRouter()

    return (
        <div>
            <Head>
                <title>Episody | UTV</title>
            </Head>
            <h2>Episody</h2>
            <SearchBox searchChange={searchChange} placeholder='epizodu' />

            {
              (filteredEpizody === 'Error')
              ? <h3>Epizody nenalezeny</h3>
              : <>
                  <h3>{porad.title}</h3>
                  <div className={styles.leadWrapper}>
                    <p className={styles.lead}>{porad.lead}</p>      
                  </div>
                       

                  { 
                    filteredEpizody.map((epizoda, i) => {
                      if (epizoda.postermini) {
                        return (
                          <Epizoda key={i} epizoda={epizoda}/>
                        )
                      }
                    })
                  }                    
              </>              
            }

            <p>
              <button 
                  onClick={() => router.back()}> 
                  Go BACK 
              </button>
            </p>
           
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </div>
    )
}


export default Epizody


export async function getServerSideProps(context) {
    const {poradId} = context.query;
    const res = await fetch(`https://data.zaktv.cz//videos.json?programme=${poradId}`);
    const data = await res.json();

    const poradRes = await fetch(`https://data.zaktv.cz/programmes/${poradId}.json`);
    const poradData = await poradRes.json();

  return {
      props: {
        epizody: data,
        porad: poradData.programme
      } // will be passed to the page component as props
    }
  }
