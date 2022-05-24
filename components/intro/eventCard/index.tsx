import React, { useState } from "react";
import Image from 'next/image';

import styles from "./eventCard.module.css";

import Arrow from '/svg/uparrow.svg'
import Circle from '/svg/circle.svg'

export interface PropTypes {
    cardList: {
        id: number,
        draw: StaticImageData,
        text : string
    }[]
}

function EventCard({ cardList }: PropTypes) {

    const [eventPage, setEventPage] = useState(1);

    const nextEventCardClick = () => {
        setEventPage(prev => prev >= cardList.length ? prev = 1 : prev + 1)
    }

    const prevEventCardClick = () => {
        setEventPage(prev => prev <= 1 ? prev = cardList.length : prev - 1)
    }

  return (
    <div className='event-card-list'>
    {cardList.map((page) => (
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
                        {cardList.map(item => {
                            return <Circle key={item.id} fill={item.id === eventPage ? 'black' : 'white'}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>))}
    </div>
  );
}

export default EventCard;
