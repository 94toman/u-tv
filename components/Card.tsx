import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import styles from '../styles/Card.module.scss';
import { Porad } from '../interfaces/index';
import { useSSE } from "use-sse";

const Card = (mojeData, id) => {

    const [data, error] = useSSE(() => {
      return fetch("https://data.zaktv.cz/programmes.json").then((res) => res.json());
    }, []);
    console.log('data: ' + data)
    
    console.log('card2: ' + id)

    return (
      
        <div className={styles.card}>
        
             <div>
              <div className={styles.card_img}>
              
              </div>
              <div className={styles.card_text}>
                <h2>{`proměnná: ${mojeData.mojeData}, ${id.id}`}</h2>
                <p>Text</p>
              </div>
            </div>      
       </div>

    )

}

export default Card

