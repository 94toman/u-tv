import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Layout.module.scss';
import { useRouter } from "next/router";
import logo from './utv_logo.png';
import Image from 'next/image';



type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'UTV - regionální televize Ústeckého kraje' }: Props) => {
  
  const router = useRouter();

  return (
  
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.allButFooter}>
      <header>
        <div className={styles.navContainer}>
          <div className={styles.navBarLogoWrapper}>
              <Link href='/'>
                  <Image alt='UTV_logo' src={logo} layout='responsive'/>
              </Link>
          </div>
          <nav>
            <div className={router.pathname == "/" ? styles.active : ""}>
              <Link href="/" >
                <a>Home</a>
              </Link>
            </div>
            <div className={router.pathname == "/about" ? styles.active : ""}>
              <Link href="/about" >
                <a>About</a>
              </Link>
            </div>
            <div className={router.pathname == "/users" ? styles.active : ""}>
              <Link href="/users/" className={styles.navigation}>
                <a>Users List</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {children}
    </div>
    <footer>
      <div>
        <span>I'm here to stay (Footer)</span>
      </div>
    </footer>
  </div>
)}

export default Layout
