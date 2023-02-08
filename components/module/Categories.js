import React from 'react';
import styles from "./categories.module.css"
import Suv from '../icons/Suv';
import Sport from '../icons/Sport';
import Sedan from '../icons/Sedan';
import Hatchback from '../icons/Hatchback';
import Link from 'next/link';
const Categories = () => {
    return (
        <div className={styles.container}>
            <Link href="/categories/sedan">
            <div>
                <p>sedan</p>
                <Sedan/>
            </div>
            </Link>
            <Link href="/categories/suv">
            <div>
                <p>SUV</p>
                <Suv/>
            </div>
            </Link>
            <Link href="/categories/hatchback">
            <div>
                <p>Hatchback</p>
                <Hatchback/>
            </div>
            </Link>
            <Link href="/categories/sport">
            <div>
                <p>sport cars</p>
                <Sport/>
            </div>
            </Link>
            
        </div>
    );
};

export default Categories;