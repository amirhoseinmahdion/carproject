import React from 'react';
import Carcard from '../module/Carcard';
import styles from "./CarsDetiles.module.css"


const Carsdetiles = ({data}) => {
    return (
        <div className={styles.container}>
              {data.map(car => <Carcard car={car} key={car.id}/>)}
        </div>
    );
};

export default Carsdetiles;