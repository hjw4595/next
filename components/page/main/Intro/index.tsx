import React from 'react';
import Image from 'next/image';

import styles from './intro.module.css';

import IntroCardImage from '/image/intro.jpg';
import Button from 'components/common/button';

import Arrow from '/svg/uparrow.svg'
import Circle from '/svg/circle.svg'

function Intro() {

    const arrowClick = () => {

    }

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
            <div className={styles['card-controll']}>
                <div className={styles['arrow-container']}>
                    <Arrow onClick={arrowClick} className={styles['left-arrow']} alt='arrow' width={24} height={24}  />
                    <Arrow onClick={arrowClick} className={styles['right-arrow']} alt='arrow' width={24} height={24}  />
                </div>
                <div className={styles['circle-container']}>
                    <div className={styles['circle-list']}>
                        <Circle fill='white'/>
                        <Circle fill='black' />
                        <Circle fill='white' />
                        <Circle fill='white'/>
                        <Circle fill='white' />
                    </div>
                </div>
            </div>
            <div className={styles['arrow-container']}>
            </div>
            <Image className={styles['card-image']} src={IntroCardImage} alt='intro image' width={1000} height={600}  />
            <div className={styles['card-text']} >
                EVENT TEXT
            </div>
        </div>

        </div>
    </div>
    )

}

export default Intro