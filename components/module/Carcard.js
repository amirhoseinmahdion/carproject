import Link from 'next/link';
import React from 'react';
import Location from '../icons/Location';
import styles from "./Cardcar.module.css"

const Carcard = ({car}) => {
    return (
        <Link href={`/Cars/${car.id}`}>
        <div className={styles.container}>
            <img src={car.image} className={styles.image}/>
            <h4 className={styles.title}>{`${car.name} ${car.model}`}</h4>
                <p className={styles.detail}>{`${car.year} . ${car.distance}Km`}</p>
            <div className={styles.footer}>
                <p>${car.price}</p>
                <div className={styles.location}>
                    <p>{car.location}</p>
                    <Location/>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Carcard;