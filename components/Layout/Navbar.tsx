import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link'
import logo from './utv_logo.png';
import styles from '../../styles/Navbar.module.scss';
import { NavLink } from '../NavLink';

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
                  <NavLink exact href="/" >
                    Home
                  </NavLink>
                  <NavLink exact href="/porady">
                    Pořady
                  </NavLink>
                  <NavLink exact href="/kontakt" >
                    Kontakt
                  </NavLink>            
                  <NavLink exact href="/naladit" >
                    Jak naladit
                  </NavLink>
              </nav>
            </div>
          </header>
    )

}

   

export default Navbar
