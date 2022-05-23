import React, { useState } from 'react';
import Image from 'next/image';

import styles from './intro.module.css';

import IntroCardImage from '/image/intro.jpg';
import Button from 'components/common/button';

import Arrow from '/svg/uparrow.svg'
import Circle from '/svg/circle.svg'

const EVENT_ART = [
    {id : 1, draw: IntroCardImage, text: '1페이지'},
    {id : 2, draw: IntroCardImage, text: '2페이지'},
    {id : 3, draw: IntroCardImage, text: '3페이지'},
    {id : 4, draw: IntroCardImage, text: '4페이지'},
    {id : 5, draw: IntroCardImage, text: '5페이지'},
]

function Intro() {
    const [eventPage, setEventPage] = useState(1);

    const nextEventCardClick = () => {
        setEventPage(prev => prev >= EVENT_ART.length ? prev = 1 : prev + 1)
    }

    const prevEventCardClick = () => {
        setEventPage(prev => prev <= 1 ? prev = EVENT_ART.length : prev - 1)
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
            <div className='event-card-list'>
                {EVENT_ART.map((page) => (
                    <div className={eventPage === page.id ? styles['now-event-page'] : styles['prve-event-page']} key={page.id}>
                        <Image className={styles['card-image']} src={page.draw} alt='intro image' width={1000} height={600}  />
                        <div className={styles['card-text']} >
                            {page.text}
                        </div>
                        <div className={styles['card-controll']}>
                            <div className={styles['arrow-container']}>
                                <Arrow onClick={prevEventCardClick} className={styles['left-arrow']} alt='arrow' width={24} height={24}  />
                                <Arrow onClick={nextEventCardClick} className={styles['right-arrow']} alt='arrow' width={24} height={24}  />
                            </div>
                            <div className={styles['circle-container']}>
                                <div className={styles['circle-list']}>
                                    {EVENT_ART.map(item => {
                                        return <Circle key={item.id} fill={item.id === eventPage ? 'black' : 'white'}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )

}

export default Intro