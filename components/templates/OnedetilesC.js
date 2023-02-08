import React from 'react';
import Company from '../icons/Company';
import Location from '../icons/Location';
import Money from '../icons/Money';
import Road from '../icons/Road';
import Model from '../icons/Model';
import Calender from '../icons/Calender';
import styles from "./Onedetile.module.css"
import { useRouter } from 'next/router';

const OnedetilesC = ({data}) => {
    const router = useRouter()
    const clickhandeler = () => {
        router.push("/")

    }
    return (
        <div className={styles.container}>
            <img src={data.image} className={styles.image} />
            <h3 className={styles.header}>{data.name} {data.model}</h3>
            <div className={styles.details}>
               <div>
                <Company/>
                <p>company</p>
                <span>{data.name}</span>
               </div>
               <div>
                <Model/>
                <p>model</p>
                <span>{data.model}</span>
               </div>
               <div>
                <Calender/>
                <p>first registration </p>
                <span>{data.year}</span>
               </div>
               <div>
                <Road/>
                <p>kms driven</p>
                <span>{data.distance}</span>
               </div>
               <div></div>
               <div></div>
               <div></div>
            </div>
            <div className={styles.details}>
                <div>
                <Location/>
                <p>loaction</p>
                <span>{data.location}</span>
                </div>
            </div>
            <div className={styles.details} >
                <h3 className={styles.descriptionTitle}>extra description</h3>
                <p  className={styles.descriptionText}>{data.description}</p>
            </div>
            <div className={styles.details}>
                <div className={styles.price}>
                <Money/>
                <p>price</p>
                <span>{data.price}</span>
                </div>
            </div>
            <button className={styles.button} onClick={clickhandeler}>buy</button>
        </div>
    );
};

export default OnedetilesC;