import Head from 'next/head'
import Link from 'next/link'

const IndexPage = ({porady}) => (
  <>
    <Head>
      <title>Home | UTV</title>
    </Head>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
)

export default IndexPage