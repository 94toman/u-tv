import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Porad.module.scss';
import { IPorad } from '../interfaces/index';

const Card = ({porad}) => {


    return (
      <>
      <Link href={`porady/${porad.id}`}>
        <div className={styles.card}>
          <div>
            <div className={styles.card_img}>
              <Image src={`${porad.logo}`} layout="intrinsic" width={450} height={253}/>
            </div>  
            <div className={styles.card_text}>
              <h2>{porad.title}</h2>
              <p>{porad.lead}</p>
            </div>
          </div>      
        </div>
        </Link>
      </>
    )

}

export default Card

