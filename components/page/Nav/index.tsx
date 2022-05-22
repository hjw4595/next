import React from 'react'
import Image from 'next/image'
import Link from "next/link";

import styles from './nav.module.css'

import Account from '/svg/account.svg'
import Wallet from '/svg/wallet.svg'

function Nav() {
return (
    <div className={styles.wrapepr}>
        <div className={styles['logo']}>
            <div>logo</div>
        </div>
        <ul className={styles['nav-index']}>
            <li className={styles.item}>
                <Link href="/artwork">
                    ARTWork
                </Link>
            </li>
            <li className={styles.item}>
                <Link href="/collections">
                    Collections
                </Link>
            </li>
            <li className={styles.item}>
                <Link href="/edtions">
                    Edtions
                </Link>
            </li>
            <li className={styles.item}>
                <Link href="/resources">
                    Resources
                </Link>
            </li>      
            <li className={styles['svg-item']}>
            <Account alt='account' width={24} height={24}  />
            </li>      
            <li className={styles['svg-item']}>
            <Wallet alt='wallet' width={24} height={24}  />
            </li>
        </ul>
    </div>
)
}

export default Nav