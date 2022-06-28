import Head from 'next/head'
import Link from 'next/link'

const IndexPage = ({porady}) => (
  // https://www.figma.com/file/Gyf7KGAHIjsoz16cQxpDBG/UTV-draft?node-id=0%3A1
  <>
    <Head>
      <title>Home | UTV</title>
    </Head>
    <h1>Vítejne na UTV 👋</h1>
    <p>
    Regionální televize Ústeckého kraje. Každý den pro vás máme aktuální zprávy a zajímavé pořady z našeho kraje.
    </p>

    <p>Nejnovější epizody</p>

    <p>Tip týdne</p>


    <p>
      <Link href="/porady">
        <a className='bold'>Zobrazit pořady</a>
      </Link>
    </p>
  </>
)

export default IndexPage