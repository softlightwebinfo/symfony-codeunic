import React from "react";
import styles from "../styles/components/FormCard.module.scss";

export const FormCard = ({onSubmit, children}) => {
    return (
        <form onSubmit={onSubmit} className={styles.FormCard}>
            <section className={styles.section}>
                {children}
            </section>
        </form>
    )
};
