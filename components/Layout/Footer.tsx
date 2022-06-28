import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import styles from '../../styles/components/Layout/Footer.module.scss';

const Footer = () => {

    const router = useRouter();

    return (
        <footer className={styles.footer}>
            <div>
                <span>I'm here to stay (Footer)</span>
            </div>
        </footer>
    )
}

export default Footer




