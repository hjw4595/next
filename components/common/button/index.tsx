import React from "react";
import styles from "./button.module.css";

export interface PropTypes {
  text: string;
  status: "normal" | "confirm";
  onClick: () => void;
}

function Button({ text, status, onClick }: PropTypes) {
  return (
    <button className={styles[`${status}`]} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
