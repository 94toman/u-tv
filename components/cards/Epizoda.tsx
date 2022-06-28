import React, { useState } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';
import styles from '../../styles/components/cards/card.module.scss';
import htmlToFormattedText from 'html-to-formatted-text';

const Epizoda = ({epizoda}) => {
    

    const router = useRouter()
    const {poradId} = router.query;
    return (
      <>
       <Link href={`${poradId}/epizoda/${epizoda.id}`}>
          <div className={styles.card}>
            <div>
              <div className={styles.card_img}>
                <Image 
                  src={`${epizoda.postermini}`} 
                  layout="intrinsic" 
                  width={450} 
                  height={253}/>
              </div>  
              <div className={styles.card_text}>
                <h3>{epizoda.title}</h3>
                <p>{htmlToFormattedText(epizoda.description)}</p>
              </div>
            </div>      
          </div>
        </Link>
      </>
    )

}

export default Epizoda

