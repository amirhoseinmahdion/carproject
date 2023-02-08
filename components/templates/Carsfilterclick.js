import React from 'react';
import { useRouter } from 'next/router';
import styles from "./cardcategory.module.css"

import Carcard from '../module/Carcard';



const Carsfilterclick = ({data}) => {
    const router = useRouter()
    const [min , max] = router.query.slug || []
    const filterdata = data.filter(item=> item.price > min && item.price < max)
    if(!filterdata.length) return <h1>not found</h1>
       
    
   
    return (
        <div className={styles.cards}>
            {filterdata.map(items => <Carcard key={items.id} car={items}/>)}
            
        </div>
    );
};

export default Carsfilterclick;