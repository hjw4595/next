import React from 'react';
import Image from 'next/image'

import introCardImage from '/image/intro.jpg'

import styles from './intro.module.css'

import Button from 'components/common/button'

function Intro() {
    return (
    <div className={styles.wrapper}>
        <div className={styles['bg-image']}></div>
        <div className={styles.content}>
        <div className={styles.text}>
            <h1>
                알고 구매하자, 
            </h1>
            <h1>
                원작들의 시세를 보고 구매하세요!
            </h1>
            <div>
                내가 알고싶은 그림들의 시세를 미리 조회해보자
            </div>
            <div className={styles['button-wrapper']} >
                <Button status='confirm' text='VIEW' onClick={() => {}} />
                <Button status='confirm' text='EXPLORE' onClick={() => {}} />
            </div>
        </div>
        <div className={styles.card}>
            <Image className={styles['card-image']} src={introCardImage} alt='intro image' width={1000} height={600}  />
            <div className={styles['card-text']} >
                EVENT TEXT
            </div>
        </div>

        </div>
    </div>
    )

}

export default Intro