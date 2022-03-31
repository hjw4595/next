import React from "react";
import Image from 'next/image';

import styles from "./card.module.css";

export interface PropTypes {
  image: string;
  profile: string;
  content: React.ReactNode;
  classname?: string;
}

function Card({ image, profile, content, classname = 'wrapper' }: PropTypes) {
  return (
    <div className={styles[`${classname}`]}>
      <div className={styles.image}>
        <Image src={image} alt='card image' width='100%' height='100%' layout="responsive"/>
      </div>
        <Image className={styles['profile-image']} src={profile} alt='profile image' width={64} height={64}/>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default Card;
