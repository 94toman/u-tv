import Head from 'next/head'
import Link from 'next/link';

const Porady = () => {
    return (
        <div>
            <Head>
                <title>Pořady | UTV</title>
            </Head>
            <h1>Pořady</h1>
            <p>This is the Pořady page</p>
            <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
            </p>
        </div>
    )
}


export default Porady


