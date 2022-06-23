import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link'
import logo from './utv_logo.png';
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {

    const router = useRouter();

    return (
        <header className={styles.header}>
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
                <div className={router.pathname == "/porady" ? styles.active : ""}>
                  <Link href="/porady" >
                    <a>Pořady</a>
                  </Link>
                </div>
                <div className={router.pathname == "/kontakt" ? styles.active : ""}>
                  <Link href="/kontakt" >
                    <a>Kontakt</a>
                  </Link>
                </div>
                <div className={router.pathname == "/naladit" ? styles.active : ""}>
                  <Link href="/naladit" >
                    <a>Jak naladit</a>
                  </Link>
                </div>
              </nav>
            </div>
          </header>
    )

}

   

export default Navbar
