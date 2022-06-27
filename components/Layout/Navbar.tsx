import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import logo from './utv_logo.png';
import styles from '../../styles/Navbar.module.scss';
import { NavLink } from '../NavLink';

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"




const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
      setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
      setNavbarOpen(false)
    }

    return (
      <>
        <style jsx>{`
        
          /* sidebar Nav */

          @media screen and (max-width: 800px) {
            .menuNav {
              overflow-y: scroll;
              list-style: none;
              position: fixed;
              top: 62px;
              background: rgb(255, 255, 255);
              border-left: solid black 1px;
              right: -1px;
              bottom: 0;
              height: 100vh;
              width: 0;
              overflow: hidden;
              max-width: 250px;
              z-index: 8;
            }  
            .showMobileMenu {
              width: 100%;
            }
          }

        `}</style>

      
        <header className={styles.header}>
            <div className={styles.navContainer}>
              <div className={styles.navBarLogoWrapper}>
                  <Link href='/'>
                      <Image alt='UTV_logo' src={logo} layout='responsive'/>
                  </Link>
              </div>
              {/* Displaying and hiding mobile menu */}
              <nav className={`menuNav ${navbarOpen ? " showMobileMenu" : ""}`}>
                {/* Rest of the menu is the same for PC and mobile*/}
                  <NavLink exact href="/" onClick={() => closeMenu()}>
                    Home
                  </NavLink>
                  <NavLink exact href="/porady" onClick={() => closeMenu()}>
                    Pořady
                  </NavLink>
                  <NavLink exact href="/kontakt" onClick={() => closeMenu()}>
                    Kontakt
                  </NavLink>            
                  <NavLink exact href="/naladit" onClick={() => closeMenu()}>
                    Jak naladit
                  </NavLink>
              </nav>
            </div>

            {/* Visible only on mobile*/}
            <div className={styles.mobileNav}>
              <button onClick={handleToggle}>
                  {navbarOpen ? (
                  <MdClose style={{ color: "#222", width: "40px", height: "40px" }} />
                  ) : (
                  <FiMenu style={{ color: "#222", width: "40px", height: "40px" }} />
                  )}
              </button>
            </div>
          </header>
      </>
    )

}

   

export default Navbar
