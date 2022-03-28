import React from 'react'
import Image from 'next/image'

import styles from './nav.module.css'

import Account from '/svg/account.svg'
import Wallet from '/svg/wallet.svg'

function Nav() {
return (
    <div className={styles.wrapepr}>
        <div>Logo</div>
        <div className={styles['nav-index']}>
            <div className={styles.item}>
                ARTWork
            </div>
            <div className={styles.item}>
                Collections
            </div>
            <div className={styles.item}>
                Edtions
            </div>
            <div className={styles.item}>
                Resources
            </div>      
            <div className={styles['svg-item']}>
            <Image src={Account} alt='account' width={24} height={24}  />
            </div>      
            <div className={styles['svg-item']}>
            <Image src={Wallet} alt='wallet' width={24} height={24}  />
            </div>
        </div>
    </div>
)
}

export default Nav