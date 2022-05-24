import React from 'react';

import styles from './intro.module.css';

import IntroCardImage from '/image/intro.jpg';
import Button from 'components/common/button';
import EventCard from 'components/intro/eventCard';

const EVENT_ART = [
    {id : 1, draw: IntroCardImage, text: '1페이지'},
    {id : 2, draw: IntroCardImage, text: '2페이지'},
    {id : 3, draw: IntroCardImage, text: '3페이지'},
    {id : 4, draw: IntroCardImage, text: '4페이지'},
    {id : 5, draw: IntroCardImage, text: '5페이지'},
]

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
            <EventCard cardList={EVENT_ART} />
            </div>
        </div>
    )

}

export default Intro