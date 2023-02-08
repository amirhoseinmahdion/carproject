import Link from 'next/link';
import React from 'react';
import styles from "./Buttonall.module.css"

const Buttonall = () => {
    return (
        <div className={styles.container}>
            <Link href="/Cars">see all cars</Link>
        </div>
    );
};

export default Buttonall;