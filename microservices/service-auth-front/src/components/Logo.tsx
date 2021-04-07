import React from "react";
import styles from "../styles/components/Logo.module.scss"

export const Logo = () => (
    <a href="https://www.codeunic.com">
        <img src="/images/logo.png" className={styles.Logo} alt="Codeunic" title={"Code Unic"}/>
    </a>
)
