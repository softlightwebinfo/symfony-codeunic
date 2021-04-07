import React from "react";
import Link from "next/link";
import styles from "../styles/components/Buttons.module.scss";
export const Buttons = ({login}) => {
    return (
        <div className={styles.Buttons}>
            {login ? (
                <>
                    <Link href="register">
                        <a>Create account</a>
                    </Link>
                    <Link href="recovery-account">
                        <a>Recovery account</a>
                    </Link>
                </>
            ):(
                <>
                    <Link href="register">
                        <a>Login account</a>
                    </Link>
                    <Link href="recovery-account">
                        <a>Recovery account</a>
                    </Link>
                </>
            )}
        </div>
    );
};
