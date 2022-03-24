import React from "react";
import styles from "./card.module.css";

export interface PropTypes {
  image: string;
  profile: string;
  content: React.ReactNode;
}

function Card({ image, profile, content }: PropTypes) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>{image}</div>
      <div className={styles.profile}>{profile}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default Card;
