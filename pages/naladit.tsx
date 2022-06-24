import Head from 'next/head'
import Link from 'next/link'

const NaladitPage = () => (
  <>
    <Head>
        <title>Jak naladit | UTV</title>
    </Head>
    <h1>Jak naladit</h1>
    <p>This is the Jak naladit page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>  
)

export default NaladitPage
