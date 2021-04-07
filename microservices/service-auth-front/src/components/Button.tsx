import React from "react";
import styles from "../styles/components/Button.module.scss"
export const Button = ({children, type}) => {
    return (
        <button
            className={styles.Button}
            type={type}
        >
            {children}
        </button>
    )
}
