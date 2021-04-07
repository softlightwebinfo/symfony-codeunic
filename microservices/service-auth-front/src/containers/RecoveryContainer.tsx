import { FormCard } from "../components/FormCard";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Buttons } from "../components/Buttons";

export const RecoveryContainer = () => {
    const [state, setState] = useState({
        email: "",
    });

    const onSubmit = () => {
        console.log("HOLA QUE TAL");
    };
    const onChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        })
    }

    return (
        <>
            <Logo/>
            <FormCard onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name={"email"}
                    placeholder={"Email"}
                    value={state.email}
                    type={"email"}
                />
                <Button type="submit">Recovery</Button>
            </FormCard>
            <Buttons login/>
        </>
    );
};
