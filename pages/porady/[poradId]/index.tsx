// porady/index

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Porad from '../../../components/cards/Porad'
import { IPorad } from '../../../interfaces'
import { useState } from "react";
import Epizoda from '../../../components/cards/Epizoda';


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


const Epizody = ({epizody}) => {
  const router = useRouter()

    return (
        <div>
            <Head>
                <title>Episody | UTV</title>
            </Head>
            <h2>Episody</h2>
            {
              (epizody.result === 'error')
              ? <>                  
                  <h3>Epizody nenalezeny</h3>
                  <button 
                      onClick={() => router.back()}> 
                      Go BACK 
                  </button>
            
                </>

              : <>
                  <h3>{epizody.videos[0].programmetitle}</h3>
                  <p>This is the Episody page</p>           
                  <p>
                    <button 
                        onClick={() => router.back()}> 
                        Go BACK 
                    </button>
                  </p>
                  { 
                    epizody.videos.map((epizoda, i) => {
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

  return {
      props: {epizody: data} // will be passed to the page component as props
    }
  }
