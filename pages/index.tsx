import Head from 'next/head'
import Link from 'next/link'

const IndexPage = ({porady}) => (
  <>
    <Head>
      <title>Home | UTV</title>
    </Head>
    <h1>Vítejne na UTV 👋</h1>
    <p>
      <Link href="/porady">
        <a>Pořady</a>
      </Link>
    </p>
  </>
)

export default IndexPage