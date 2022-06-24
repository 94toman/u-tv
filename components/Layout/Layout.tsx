import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';



type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'UTV - regionální televize Ústeckého kraje' }: Props) => {
  

  return (
  
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.allButFooter}>
      <Navbar/>
      {children}
      
    </div>
    <Footer />
  </div>
)}

export default Layout
