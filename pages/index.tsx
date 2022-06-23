import Head from 'next/head'
import Link from 'next/link'

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | UTV</title>
    </Head>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
)

export default IndexPage
