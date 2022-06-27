import Head from 'next/head'
import Link from 'next/link'

const KontaktPage = () => (
  <>
    <Head>
        <title>Kontakt | UTV</title>
    </Head>
      <h1>Kontakt</h1>
      <p>This is the Kontakt page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
  </>

)

export default KontaktPage
