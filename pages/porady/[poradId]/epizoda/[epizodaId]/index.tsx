// porady/index
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'
import htmlToFormattedText from "html-to-formatted-text";
import styles from '../../../../../styles/Epizoda.module.scss'
import dynamic from 'next/dynamic'
const Player = dynamic(() => import('../../../../../components/Player'), {
  ssr: false,
})

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


const Epizoda = ({epizoda, porad}) => {
  const router = useRouter()

    return (
        <div>
            <Head>
                <title>Episoda | UTV</title>
            </Head>
            <h2>Epizoda</h2>
            <h2>Pořad: {porad.programme.title}</h2>
            {
              (epizoda.result === 'error')
              // Error handling
              ? <>                  
                  <h3>Epizoda nenalezena</h3>
                  <button 
                      onClick={() => router.back()}> 
                      Go BACK 
                  </button>
            
                </>
              // Displaying content
              : <>
                  <h3>{epizoda.video.title}</h3>
                  <p>This is the Episoda page</p>           
                  <p>
                    <button 
                        onClick={() => router.back()}> 
                        Go BACK 
                    </button>
                  </p>
                  <p>ID: {epizoda.video.id}</p>
                  <p>Durazion: {epizoda.video.duration}</p>
                  <Image src={epizoda.video.poster} layout='fixed' width={450} height={250}/>

                  <div className={styles.player}>
                    <Player />
                  </div>

                  

                  {
                      (epizoda.video.duration)
                      ? <div>
                          <div>{htmlToFormattedText(epizoda.description)}</div><br/>                          

                      </div>
                      : <h2 className='errortitle'>{epizoda.description}</h2>
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


export default Epizoda


export async function getServerSideProps(context) {
    const {poradId, epizodaId} = context.query;
    const res = await fetch(`https://data.zaktv.cz/videos/${epizodaId}.json`);
    const data = await res.json();

    //const resPorad = await fetch(`https://data.zaktv.cz/videos.json?programme=${poradId}`);
    const resPorad = await fetch(`https://data.zaktv.cz/programmes/${poradId}.json`);
    const dataPorad = await resPorad.json();

  return {
      props: {
        epizoda: data,
        porad: dataPorad
      } // will be passed to the page component as props
    }
  }
