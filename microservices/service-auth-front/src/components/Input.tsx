import React from "react";
import { TInputProps } from "../props/TInputProps";
import styles from "../styles/components/Input.module.scss"
export const Input = (props: TInputProps) => {
    const {
        type = "text",
        value,
        placeholder,
        onChange,
        name,
    } = props;
    return (
        <label className={styles.Input}>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </label>
    )
};
