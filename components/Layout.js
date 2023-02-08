import Link from 'next/link';
import React from 'react';
import styles from "../components/Layout.module.css"

const Layout = ({children}) => {
    return (
        <div>
             <Link href='/'>
            <div className={styles.header}>
               <h2>BOTOCAR</h2>
                <p>choose and buy you car</p>
            </div>
            </Link>
        <div className={styles.container}> {children}</div>   
            <div className={styles.footer}>
                botostart next.js courses | botocar project
            </div>
        </div>
    );
};

export default Layout;