import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from "./Searchcars.module.css"

const Searchcars = () => {
    const [minstate , setMin] = useState("");
    const [maxstate , setMax] = useState("");
    
    const router = useRouter()

   
    const handleclickitem = () => {
        if(minstate && maxstate){
            router.push(`/filters/${minstate}/${maxstate}`)

        }else {
            alert("try again")
        }
    }
    
    return (
        <div className={styles.container}>
            <div>
            <input placeholder='inter min-price' value={minstate} onChange={(e) => setMin(e.target.value)}/>
            <input placeholder='inter max-price' value={maxstate} onChange={(e) =>setMax(e.target.value)}/>
            
            </div>
            <button onClick={handleclickitem}>serach</button>
        </div>
    );
};

export default Searchcars;