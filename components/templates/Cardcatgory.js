import { useRouter } from 'next/router';
import React from 'react';
import Back from '../icons/Back';
import Carcard from '../module/Carcard';
import styles from "./cardcategory.module.css"

const Cardcatgory = ({data}) => {
    const router = useRouter();
    const clickhandleback = () => {
        router.back();
    }
    return (
        <div className={styles.container}>
           <div className={styles.back} onClick={clickhandleback}>
            <Back/>
            <p>back</p>
           </div>
           <div className={styles.cards} >
           {data.map(item => <Carcard key={item.id} car={item}/>)}
           </div>
        </div>
    );
};

export default Cardcatgory;