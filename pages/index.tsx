import Head from 'next/head'
import Link from 'next/link'

const IndexPage = ({porady}) => (
  <>
    <Head>
      <title>Home | UTV</title>
    </Head>
    <h1>Vítejne na UTV 👋</h1>
    <p>
    Regionální televize Ústeckého kraje. Každý den pro vás máme aktuální zprávy a zajímavé pořady z našeho kraje.
    </p>


    <p>
      <Link href="/porady">
        <a className='bold'>Zobrazit pořady</a>
      </Link>
    </p>
  </>
)

export default IndexPage